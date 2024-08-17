"use client";

import { Box } from "@radix-ui/themes";
import React from "react";

import { removeFinalBlankLine } from "~/lib/strings";
import { CopyTextButton } from "./copy-text-button";
import { Pre } from "./pre";
import styles from "./pre-with-copy-button.module.css";

export const PreWithCopyButton = ({ ...props }): React.JSX.Element => {
	const [code, setCode] = React.useState<string>();

	return (
		<Box className={styles.PreContainer}>
			<Pre
				ref={(node: HTMLPreElement | null): void => {
					if (node) {
						const codeElement: HTMLElement | null = node.querySelector("code");
						setCode(removeFinalBlankLine(codeElement?.innerText ?? ""));
					}
				}}
				my="5"
				{...props}
			/>
			<CopyTextButton className={styles.CopyButton} textToCopy={code} />
		</Box>
	);
};