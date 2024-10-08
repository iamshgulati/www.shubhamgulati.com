"use client";

import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import React from "react";

type CopyTextButtonProps = React.ComponentPropsWithoutRef<typeof IconButton> & {
	textToCopy?: string;
};

export const CopyTextButton = ({
	textToCopy = undefined,
	...props
}: CopyTextButtonProps): React.JSX.Element => {
	const [copied, setCopied] = React.useState(false);

	React.useEffect((): void => {
		if (copied) setTimeout(() => setCopied(false), 1500);
	}, [copied]);

	const copyToClipboard = (textToCopy: string) => {
		window.navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				setCopied(true);
			})
			.catch((error) => {
				console.error("Failed to copy:", error);
			});
	};

	return (
		<IconButton
			aria-label="Copy code to clipboard"
			onClick={(): void => {
				copyToClipboard(textToCopy ?? "");
				setCopied(true);
			}}
			color="gray"
			variant="soft"
			{...props}
		>
			{copied ? <CheckIcon /> : <ClipboardIcon />}
		</IconButton>
	);
};
