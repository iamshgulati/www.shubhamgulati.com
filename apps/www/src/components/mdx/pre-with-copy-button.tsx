"use client";

import React from "react";
import { Box } from "@radix-ui/themes";

import { removeDoubleLineBreaks, removeFinalBlankLine } from "~/lib/strings";
import { CopyTextButton } from "./copy-text-button";
import { Pre } from "./pre";
import styles from "./pre-with-copy-button.module.css";

export const PreWithCopyButton = ({ ...props }): React.JSX.Element => {
  const [code, setCode] = React.useState<string>();

  return (
    <Box className={styles.PreContainer}>
      <Pre
        {...props}
        my="5"
        ref={(node: HTMLPreElement | null): void => {
          if (node) {
            const codeElement: HTMLElement | null = node.querySelector("code");
            setCode(
              removeFinalBlankLine(
                removeDoubleLineBreaks(codeElement?.innerText ?? ""),
              ),
            );
          }
        }}
      />
      <CopyTextButton className={styles.CopyButton} textToCopy={code} />
    </Box>
  );
};
