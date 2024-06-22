"use client";

import React from "react";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { Box, IconButton } from "@radix-ui/themes";

import type { Icon } from "./icons";
import { useScrollState } from "~/hooks/useScrollState";
import styles from "./floating-scroll-to-top-button.module.css";

type FloatingScrollToTopButtonProps = React.ComponentProps<
  typeof IconButton
> & {
  scrollTopThreshold?: number;
  smoothScroll?: boolean;
  iconProps?: React.ComponentProps<Icon>;
};

export const FloatingScrollToTopButton = ({
  scrollTopThreshold = 20,
  smoothScroll = false,
  iconProps = { width: "20", height: "20" },
  ...props
}: FloatingScrollToTopButtonProps): React.JSX.Element => {
  const scrolled = useScrollState({
    scrollTopThreshold,
  }).scrolled;
  return (
    <Box
      data-scrolled-state={`${scrolled}`}
      className={styles.FloatingScrollToTopButtonContainer}
    >
      <IconButton
        {...props}
        aria-label="Scroll To Top"
        size="4"
        highContrast
        radius="full"
        onClick={() => scrollToTop({ smoothScroll })}
      >
        <ChevronUpIcon {...iconProps} />
      </IconButton>
    </Box>
  );
};

function scrollToTop({ smoothScroll = false }) {
  if (smoothScroll) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
}
