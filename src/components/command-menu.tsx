"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createContext } from "@radix-ui/react-context";
import {
  ArrowTopRightIcon,
  Half2Icon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Box, Dialog, IconButton, Kbd } from "@radix-ui/themes";
import { Command, CommandGroup } from "cmdk";

import type { Icon } from "./icons";
import type { AppRoute } from "~/lib/routes";
import type { Frontmatter } from "~/types/frontmatter";
import { useCommandMenuToggle } from "~/hooks/useCommandMenuToggle";
import { useKeyboardShortcuts } from "~/hooks/useKeyboardShortcuts";
import { useThemeToggle } from "~/hooks/useThemeToggle";
import { Icons } from "./icons";

const [MenuProvider, useMenuContext] = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>("CommandMenu");

export const CommandMenuProvider = ({
  children = undefined,
}: React.PropsWithChildren): React.JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <MenuProvider open={open} setOpen={setOpen}>
      {children}
    </MenuProvider>
  );
};

export const useCommandMenu = () => useMenuContext("CommandMenu");

type CommandMenuProps = React.ComponentProps<typeof IconButton> & {
  routes?: AppRoute[];
  iconProps?: React.ComponentProps<Icon>;
};

export function CommandMenu({
  routes = undefined,
  iconProps = { width: "16", height: "16" },
  ...props
}: CommandMenuProps): React.JSX.Element {
  const commandMenu = useCommandMenu();
  const router = useRouter();

  const { handleCommandMenuToggle } = useCommandMenuToggle();
  const { handleThemeToggle } = useThemeToggle();

  useKeyboardShortcuts({
    handleCommandMenuToggle,
    handleThemeToggle,
  });

  const runCommand = React.useCallback(
    (command: () => unknown): void => {
      commandMenu.setOpen(false);
      command();
    },
    [commandMenu],
  );

  return (
    <Dialog.Root open={commandMenu.open} onOpenChange={commandMenu.setOpen}>
      <Dialog.Trigger>
        <IconButton
          {...props}
          size="3"
          variant="ghost"
          color="gray"
          highContrast
        >
          <Icons.CommandIcon
            {...iconProps}
            aria-label="Open Command Menu"
            style={{
              transform: "scale(1.4)",
            }}
          />
        </IconButton>
      </Dialog.Trigger>
      {/* Inline styles necessary here to override styles defined by Radix Themes */}
      <Box
        asChild
        style={{
          padding: "0",
          borderRadius: "var(--radius-4)",
          boxShadow: "none",
          overflow: "hidden",
        }}
      >
        <Dialog.Content>
          <Command>
            <Command.Input placeholder="Type a command or search..." />

            <Command.List>
              <Command.Empty>No results found</Command.Empty>

              <CommandGroup heading="Keyboard Shortcuts">
                <Command.Item
                  value="CmdK Command Menu Keyboard Shortcut: Toggle CmdK Command Menu"
                  onSelect={() =>
                    runCommand((): void => {
                      // do nothing
                    })
                  }
                >
                  <Icons.CommandIcon />
                  Command Menu
                  <CommandShortcut>⌘&thinsp;K</CommandShortcut>
                </Command.Item>

                <Command.Item
                  value="Theme Keyboard Shortcut: Toggle Theme System Light Dark"
                  onSelect={() => runCommand(() => handleThemeToggle())}
                >
                  <Half2Icon
                    width="16"
                    height="16"
                    style={{
                      display: "var(--system-theme-icon-display)",
                      // transform: "rotate(45deg)",
                    }}
                  />
                  <SunIcon
                    width="16"
                    height="16"
                    style={{ display: "var(--light-theme-icon-display)" }}
                  />
                  <MoonIcon
                    width="16"
                    height="16"
                    style={{ display: "var(--dark-theme-icon-display)" }}
                  />
                  Theme
                  <CommandShortcut>⌘&thinsp;D</CommandShortcut>
                </Command.Item>
              </CommandGroup>

              {routes?.map((section: AppRoute): React.JSX.Element | null =>
                section.pages ? (
                  <Command.Group key={section.label} heading={section.label}>
                    {section.pages.map((page: Frontmatter) => {
                      const ItemIcon: Icon | undefined =
                        page.icon && Icons[page.icon];
                      return (
                        <Command.Item
                          key={page.slug}
                          value={`${section.label}: ${page.title}`}
                          data-disabled={page.disabled}
                          onSelect={(): void => {
                            runCommand(() => router.push(page.slug));
                          }}
                        >
                          {ItemIcon && <ItemIcon />}
                          {page.title}
                          {page.slug.startsWith("http") && (
                            <ArrowTopRightIcon />
                          )}
                        </Command.Item>
                      );
                    })}
                  </Command.Group>
                ) : null,
              )}
            </Command.List>
          </Command>
        </Dialog.Content>
      </Box>
    </Dialog.Root>
  );
}

const CommandShortcut = ({
  children = undefined,
}: React.PropsWithChildren): React.JSX.Element => (
  <Kbd cmdk-kbd="">{children}</Kbd>
);