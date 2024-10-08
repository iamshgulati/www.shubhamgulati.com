import {
	ArrowRightIcon,
	ArrowTopRightIcon,
	BackpackIcon,
	ChatBubbleIcon,
	CheckIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronUpIcon,
	ClipboardIcon,
	CodeIcon,
	CrumpledPaperIcon,
	CubeIcon,
	ExclamationTriangleIcon,
	FileIcon,
	FileTextIcon,
	GitHubLogoIcon,
	Half2Icon,
	HeartIcon,
	HomeIcon,
	InfoCircledIcon,
	KeyboardIcon,
	Link2Icon,
	LinkedInLogoIcon,
	LockClosedIcon,
	MixIcon,
	MoonIcon,
	PersonIcon,
	QuoteIcon,
	SunIcon,
	TwitterLogoIcon as TwitterAltLogoIcon,
} from "@radix-ui/react-icons";
import type { IconProps } from "@radix-ui/react-icons/dist/types";
import React from "react";

export type Icon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export const YinYangIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// gi/GiYinYang
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
				stroke={color}
				fill={color}
				strokeWidth="0"
				{...props}
				ref={forwardedRef}
			>
				<path d="M256 23C127.424 23 23 127.424 23 256s104.424 233 233 233 233-104.424 233-233S384.576 23 256 23zm-6.094 18.09C128.036 47.807 130.066 256 256 256c125.215 0 127.935 205.872 8.168 214.83-2.71.1-5.432.17-8.168.17-118.848 0-215-96.152-215-215 0-116.81 92.883-211.69 208.906-214.91zM256 103c22.537 0 41 18.463 41 41s-18.463 41-41 41-41-18.463-41-41 18.463-41 41-41zm0 224c-22.537 0-41 18.463-41 41s18.463 41 41 41 41-18.463 41-41-18.463-41-41-41z" />
			</svg>
		);
	},
);
YinYangIcon.displayName = "YinYangIcon";

export const CommandIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// BiCommand
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				stroke={color}
				fill={color}
				strokeWidth="0"
				{...props}
				ref={forwardedRef}
			>
				<path
					d="M6 14c-2.206 0-4 1.794-4 4s1.794 4 4 4a4.003 4.003 0 0 0 3.998-3.98H10V16h4v2.039h.004A4.002 4.002 0 0 0 18 22c2.206 0 4-1.794 4-4s-1.794-4-4-4h-2v-4h2c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4v2h-4V5.98h-.002A4.003 4.003 0 0 0 6 2C3.794 2 2 3.794 2 6s1.794 4 4 4h2v4H6zm2 4c0 1.122-.879 2-2 2s-2-.878-2-2 .879-2 2-2h2v2zm10-2c1.121 0 2 .878 2 2s-.879 2-2 2-2-.878-2-2v-2h2zM16 6c0-1.122.879-2 2-2s2 .878 2 2-.879 2-2 2h-2V6zM6 8c-1.121 0-2-.878-2-2s.879-2 2-2 2 .878 2 2v2H6zm4 2h4v4h-4v-4z"
					fillRule="evenodd"
					clipRule="evenodd"
				/>
			</svg>
		);
	},
);
CommandIcon.displayName = "CommandIcon";

export const HashIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// hi2/HiHashtag
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				stroke={color}
				fill={color}
				strokeWidth="0"
				{...props}
				ref={forwardedRef}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11.097 1.515a.75.75 0 01.589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 111.47.294L16.665 7.5h3.585a.75.75 0 010 1.5h-3.885l-1.2 6h3.585a.75.75 0 010 1.5h-3.885l-1.08 5.397a.75.75 0 11-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 01-1.47-.294l1.02-5.103H3.75a.75.75 0 110-1.5h3.885l1.2-6H5.25a.75.75 0 010-1.5h3.885l1.08-5.397a.75.75 0 01.882-.588zM10.365 9l-1.2 6h4.47l1.2-6h-4.47z"
				/>
			</svg>
		);
	},
);
HashIcon.displayName = "HashIcon";

export const HammerIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// io5/IoHammerOutline
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
				stroke={color}
				fill={color}
				strokeWidth="0"
				{...props}
				ref={forwardedRef}
			>
				<path
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="32"
					d="M277.42 247a24.68 24.68 0 0 0-4.08-5.47L255 223.44a21.63 21.63 0 0 0-6.56-4.57 20.93 20.93 0 0 0-23.28 4.27c-6.36 6.26-18 17.68-39 38.43C146 301.3 71.43 367.89 37.71 396.29a16 16 0 0 0-1.09 23.54l39 39.43a16.13 16.13 0 0 0 23.67-.89c29.24-34.37 96.3-109 136-148.23 20.39-20.06 31.82-31.58 38.29-37.94a21.76 21.76 0 0 0 3.84-25.2zm201.01-46-34.31-34a5.44 5.44 0 0 0-4-1.59 5.59 5.59 0 0 0-4 1.59h0a11.41 11.41 0 0 1-9.55 3.27c-4.48-.49-9.25-1.88-12.33-4.86-7-6.86 1.09-20.36-5.07-29a242.88 242.88 0 0 0-23.08-26.72c-7.06-7-34.81-33.47-81.55-52.53a123.79 123.79 0 0 0-47-9.24c-26.35 0-46.61 11.76-54 18.51-5.88 5.32-12 13.77-12 13.77a91.29 91.29 0 0 1 10.81-3.2 79.53 79.53 0 0 1 23.28-1.49C241.19 76.8 259.94 84.1 270 92c16.21 13 23.18 30.39 24.27 52.83.8 16.69-15.23 37.76-30.44 54.94a7.85 7.85 0 0 0 .4 10.83l21.24 21.23a8 8 0 0 0 11.14.1c13.93-13.51 31.09-28.47 40.82-34.46s17.58-7.68 21.35-8.09a35.71 35.71 0 0 1 21.3 4.62 13.65 13.65 0 0 1 3.08 2.38c6.46 6.56 6.07 17.28-.5 23.74l-2 1.89a5.5 5.5 0 0 0 0 7.84l34.31 34a5.5 5.5 0 0 0 4 1.58 5.65 5.65 0 0 0 4-1.58L478.43 209a5.82 5.82 0 0 0 0-8z"
				/>
			</svg>
		);
	},
);
HammerIcon.displayName = "HammerIcon";

export const AtSymbolIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// HiAtSymbol
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				stroke={color}
				fill={color}
				strokeWidth="0"
				{...props}
				ref={forwardedRef}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
				/>
			</svg>
		);
	},
);
AtSymbolIcon.displayName = "AtSymbolIcon";

export const GitHubAltLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// PiGithubLogo
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 256 256"
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				{...props}
				ref={forwardedRef}
			>
				<path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
			</svg>
		);
	},
);
GitHubAltLogoIcon.displayName = "GitHubAltLogoIcon";

export const LinkedInAltLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// PiLinkedinLogoIcon
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 256 256"
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				{...props}
				ref={forwardedRef}
			>
				<path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
			</svg>
		);
	},
);
LinkedInAltLogoIcon.displayName = "LinkedInAltLogoIcon";

export const BlueskyLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// Official Bluesky Website
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 360 320"
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				{...props}
				ref={forwardedRef}
			>
				<path d="M254.896 184.158C252.81 183.926 250.733 183.645 248.671 183.315C250.773 183.574 252.849 183.855 254.896 184.158Z" />
				<path d="M180 141.964C163.699 110.262 119.308 51.1817 78.0347 22.044C38.4971 -5.86834 23.414 -1.03207 13.526 3.43594C2.08093 8.60755 0 26.1785 0 36.5164C0 46.8542 5.66748 121.272 9.36416 133.694C21.5786 174.738 65.0603 188.607 105.104 184.156C107.151 183.852 109.227 183.572 111.329 183.312C109.267 183.642 107.19 183.924 105.104 184.156C46.4204 192.847 -5.69621 214.233 62.6582 290.33C137.848 368.18 165.705 273.637 180 225.702C194.295 273.637 210.76 364.771 295.995 290.33C360 225.702 313.58 192.85 254.896 184.158C252.81 183.926 250.733 183.645 248.671 183.315C250.773 183.574 252.849 183.855 254.896 184.158C294.94 188.61 338.421 174.74 350.636 133.697C354.333 121.275 360 46.8568 360 36.519C360 26.1811 357.919 8.61012 346.474 3.43851C336.586 -1.02949 321.503 -5.86576 281.965 22.0466C240.692 51.1843 196.301 110.262 180 141.964Z" />
			</svg>
		);
	},
);
BlueskyLogoIcon.displayName = "BlueskyLogoIcon";

export const BlueskyAltLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// PiButterflyIcon
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 256 256"
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				{...props}
				ref={forwardedRef}
			>
				<path d="M232.7,50.48C229,45.7,221.84,40,209,40c-16.85,0-38.46,11.28-57.81,30.16A140.07,140.07,0,0,0,136,87.53V56a8,8,0,0,0-16,0V87.53a140.07,140.07,0,0,0-15.15-17.37C85.49,51.28,63.88,40,47,40,34.16,40,27,45.7,23.3,50.48c-6.82,8.77-12.18,24.08-.21,71.2,6.05,23.83,19.51,33,30.63,36.42A44,44,0,0,0,128,205.27a44,44,0,0,0,74.28-47.17c11.12-3.4,24.57-12.59,30.63-36.42C239.63,95.24,244.85,66.1,232.7,50.48ZM92,208A28.12,28.12,0,0,1,88.86,152a8,8,0,1,0-1.76-15.9A43.64,43.64,0,0,0,66.36,144c-8.43.09-22-3.57-27.76-26.26C35.72,106.39,27,71.86,35.94,60.3,37.37,58.46,40.09,56,47,56c27.27,0,73,44.88,73,71.67V180A28,28,0,0,1,92,208ZM217.4,117.74c-5.77,22.69-19.33,26.34-27.77,26.26a43.6,43.6,0,0,0-20.74-7.95,8,8,0,1,0-1.76,15.9A28.11,28.11,0,1,1,136,180V127.67C136,100.88,181.69,56,209,56c6.95,0,9.66,2.46,11.1,4.3C229.05,71.86,220.28,106.39,217.4,117.74Z" />
			</svg>
		);
	},
);
BlueskyAltLogoIcon.displayName = "BlueskyAltLogoIcon";

export const TwitterLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// RxTwitterLogoIcon
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				{...props}
				ref={forwardedRef}
			>
				<path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
			</svg>
		);
	},
);
TwitterLogoIcon.displayName = "TwitterLogoIcon";

export const ThreadsLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// SiThreads
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				{...props}
				ref={forwardedRef}
			>
				<path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" />
			</svg>
		);
	},
);
ThreadsLogoIcon.displayName = "ThreadsLogoIcon";

export const MastodonLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// SiMastodon
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				{...props}
				ref={forwardedRef}
			>
				<path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z" />
			</svg>
		);
	},
);
MastodonLogoIcon.displayName = "MastodonLogoIcon";

export const SpringFrameworkIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// SiSpring
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				{...props}
				ref={forwardedRef}
			>
				<path d="M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z" />
			</svg>
		);
	},
);
SpringFrameworkIcon.displayName = "SpringFrameworkIcon";

export const SpringBootIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// SiSpringboot
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				{...props}
				ref={forwardedRef}
			>
				<path d="m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z" />
			</svg>
		);
	},
);
SpringBootIcon.displayName = "SpringBootIcon";

export const JavaIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// FaJava
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 384 512"
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				{...props}
				ref={forwardedRef}
			>
				<path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z" />
			</svg>
		);
	},
);
JavaIcon.displayName = "JavaIcon";

export const TypescriptIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// SiTypescript
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
				ref={forwardedRef}
			>
				<path
					fill={color}
					stroke={color}
					strokeWidth="0"
					d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
				/>
			</svg>
		);
	},
);
TypescriptIcon.displayName = "TypescriptIcon";

export const ReactIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// SiReact
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
				ref={forwardedRef}
			>
				<path
					fill={color}
					stroke={color}
					strokeWidth="0"
					d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
				/>
			</svg>
		);
	},
);
ReactIcon.displayName = "ReactIcon";

export const TailwindCSSIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// SiTailwindcss
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
				ref={forwardedRef}
			>
				<path
					fill={color}
					stroke={color}
					strokeWidth="0"
					d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
				/>
			</svg>
		);
	},
);
TailwindCSSIcon.displayName = "TailwindCSSIcon";

export const FramerMotionIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// SiFramer
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
				ref={forwardedRef}
			>
				<path
					fill={color}
					stroke={color}
					strokeWidth="0"
					d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"
				/>
			</svg>
		);
	},
);
FramerMotionIcon.displayName = "FramerMotionIcon";

export const NextJsIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// SiNextdotjs
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
				ref={forwardedRef}
			>
				<path
					fill={color}
					stroke={color}
					strokeWidth="0"
					d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"
				/>
			</svg>
		);
	},
);
NextJsIcon.displayName = "NextJsIcon";

export const VisualStudioCodeIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// SiVisualstudiocode
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
				ref={forwardedRef}
			>
				<path
					fill={color}
					stroke={color}
					strokeWidth="0"
					d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
				/>
			</svg>
		);
	},
);
VisualStudioCodeIcon.displayName = "VisualStudioCodeIcon";

export const WebStormIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// SiWebstorm
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
				ref={forwardedRef}
			>
				<path
					fill={color}
					stroke={color}
					strokeWidth="0"
					d="M0 0v24h24V0H0zm17.889 2.889c1.444 0 2.667.444 3.667 1.278l-1.111 1.667c-.889-.611-1.722-1-2.556-1s-1.278.389-1.278.889v.056c0 .667.444.889 2.111 1.333 2 .556 3.111 1.278 3.111 3v.056c0 2-1.5 3.111-3.611 3.111-1.5-.056-3-.611-4.167-1.667l1.278-1.556c.889.722 1.833 1.222 2.944 1.222.889 0 1.389-.333 1.389-.944v-.056c0-.556-.333-.833-2-1.278-2-.5-3.222-1.056-3.222-3.056v-.056c0-1.833 1.444-3 3.444-3zm-16.111.222h2.278l1.5 5.778 1.722-5.778h1.667l1.667 5.778 1.5-5.778h2.333l-2.833 9.944H9.723L8.112 7.277l-1.667 5.778H4.612L1.779 3.111zm.5 16.389h9V21h-9v-1.5z"
				/>
			</svg>
		);
	},
);
WebStormIcon.displayName = "WebStormIcon";

export const PostmanIcon = React.forwardRef<SVGSVGElement, IconProps>(
	// SiWebstorm
	({ color = "currentColor", ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				{...props}
				ref={forwardedRef}
			>
				<path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z" />
			</svg>
		);
	},
);
PostmanIcon.displayName = "PostmanIcon";

export const FlagOfCanadaIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="0 0 9600 4800"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
				ref={forwardedRef}
			>
				<path fill="#f00" d="m0 0h2400l99 99h4602l99-99h2400v4800h-2400l-99-99h-4602l-99 99H0z" />
				<path
					fill="#fff"
					d="m2400 0h4800v4800h-4800zm2490 4430-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"
				/>
			</svg>
		);
	},
);
FlagOfCanadaIcon.displayName = "FlagOfCanadaIcon";

export const FlagOfIndiaIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ ...props }, forwardedRef): React.JSX.Element => {
		return (
			<svg
				width="15"
				height="15"
				viewBox="-45 -30 90 60"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				fill="#2C2C6F"
				{...props}
				ref={forwardedRef}
			>
				<path fill="#FFF" d="m-45-30h90v60h-90z" />
				<path fill="#F15B25" d="m-45-30h90v20h-90z" />
				<path fill="#006934" d="m-45 10h90v20h-90z" />
				<circle r="9.25" />
				<circle fill="#fff" r="8" />
				<circle r="1.6" />
				<g id="d">
					<g id="c">
						<g id="b">
							<g id="a">
								<path d="m0-8 .3 4.81409L0-.80235-.3-3.18591z" />
								<circle transform="rotate(7.5)" r="0.35" cy="-8" />
							</g>
							<use xlinkHref="#a" transform="scale(-1)" />
						</g>
						<use xlinkHref="#b" transform="rotate(15)" />
					</g>
					<use xlinkHref="#c" transform="rotate(30)" />
				</g>
				<use xlinkHref="#d" transform="rotate(60)" />
				<use xlinkHref="#d" transform="rotate(120)" />
			</svg>
		);
	},
);
FlagOfIndiaIcon.displayName = "FlagOfIndiaIcon";

export const Icons = {
	FileIcon,
	FileTextIcon,
	HashIcon,
	HammerIcon,
	AtSymbolIcon,
	PersonIcon,
	CubeIcon,
	CrumpledPaperIcon,
	QuoteIcon,
	ChatBubbleIcon,
	KeyboardIcon,
	LockClosedIcon,
	Link2Icon,
	HomeIcon,
	BackpackIcon,
	MixIcon,
	HeartIcon,
	InfoCircledIcon,
	ArrowRightIcon,
	ArrowTopRightIcon,
	CodeIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronUpIcon,
	ChevronDownIcon,
	ExclamationTriangleIcon,
	Half2Icon,
	MoonIcon,
	SunIcon,
	CheckIcon,
	ClipboardIcon,
	//
	CommandIcon,
	LinkedInLogoIcon,
	LinkedInAltLogoIcon,
	GitHubLogoIcon,
	GitHubAltLogoIcon,
	BlueskyLogoIcon,
	BlueskyAltLogoIcon,
	TwitterLogoIcon,
	TwitterAltLogoIcon,
	ThreadsLogoIcon,
	MastodonLogoIcon,
	SpringFrameworkIcon,
	SpringBootIcon,
	JavaIcon,
	TypescriptIcon,
	ReactIcon,
	TailwindCSSIcon,
	FramerMotionIcon,
	NextJsIcon,
	VisualStudioCodeIcon,
	WebStormIcon,
	PostmanIcon,
	FlagOfIndiaIcon,
	FlagOfCanadaIcon,
} as const;
