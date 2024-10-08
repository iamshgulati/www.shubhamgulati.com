"use client";

import { ChevronUpIcon } from "@radix-ui/react-icons";
import { Box, IconButton } from "@radix-ui/themes";
import type React from "react";

import { useScrollState } from "~/hooks/useScrollState";
import styles from "./floating-scroll-to-top-button.module.css";

type FloatingScrollToTopButtonProps = React.ComponentPropsWithoutRef<typeof IconButton> & {
	scrollTopThreshold?: number;
	smoothScroll?: boolean;
};

export const FloatingScrollToTopButton = ({
	scrollTopThreshold = 20,
	smoothScroll = false,
	...props
}: FloatingScrollToTopButtonProps): React.JSX.Element => {
	const scrolled = useScrollState({
		scrollTopThreshold,
	}).scrolled;
	return (
		<Box data-scrolled-state={`${scrolled}`} className={styles.FloatingScrollToTopButtonContainer}>
			<IconButton
				aria-label="Scroll To Top"
				size="4"
				variant="surface"
				color="gray"
				radius="full"
				onClick={() => scrollToTop({ smoothScroll })}
				{...props}
			>
				<ChevronUpIcon width="20" height="20" />
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
