import { Heading } from "@radix-ui/themes";
import type React from "react";

export const H5 = ({
	children = undefined,
	...props
}: React.PropsWithChildren): React.JSX.Element => (
	<Heading asChild size="4" mt="6" mb="3">
		<h5 style={{ scrollMarginTop: "var(--space-9)" }} {...props}>
			{children}
		</h5>
	</Heading>
);
