import type { Interpolation, Theme as EmotionTheme } from '@emotion/react';
import type { CSSProperties } from 'react';
import React from 'react';
import { type ButtonProps } from '../Button';
import type { DesignSystemEventProviderAnalyticsEventTypes } from '../DesignSystemEventProvider';
import type { AnalyticsEventProps, HTMLDataAttributes } from '../types';
export interface SidebarProps extends HTMLDataAttributes {
    /** The layout direction */
    position?: 'left' | 'right';
    /** Contents displayed in the sidebar */
    children?: React.ReactNode;
    /** Applies emotion styles to the top-level element in the component. Ask in #dubois before using. */
    dangerouslyAppendEmotionCSS?: Interpolation<EmotionTheme>;
}
export interface NavProps {
    /** Contents displayed in the nav bar */
    children?: React.ReactNode;
    /** Applies emotion styles to the top-level element in the component. Ask in #dubois before using. */
    dangerouslyAppendEmotionCSS?: Interpolation<EmotionTheme>;
}
export interface NavButtonProps extends ButtonProps {
    /** Check if the currrent button in nav bar is being selected */
    active?: boolean;
    /** Check if the currrent button in nav bar is being disabled */
    disabled?: boolean;
    /** The icon on the button */
    icon?: React.ReactNode;
    /** Contents displayed in the nav bar */
    children?: React.ReactNode;
    /** The callback function when nav button is clicked */
    onClick?: () => void;
    'aria-label'?: string;
    /** Applies emotion styles to the top-level element in the component. Ask in #dubois before using. */
    dangerouslyAppendEmotionCSS?: Interpolation<EmotionTheme>;
}
export interface ContentProps extends AnalyticsEventProps<DesignSystemEventProviderAnalyticsEventTypes.OnClick> {
    /** The open panel id */
    openPanelId?: number;
    /** The content width, default is 200px */
    width?: number;
    /** The minimum content width */
    minWidth?: number;
    /** The maximum content width */
    maxWidth?: number;
    /** Whether or not to make the component resizable */
    disableResize?: boolean;
    /** Whether or not to show a close button which can close the panel */
    closable?: boolean;
    /** Whether to destroy inactive panels and their state when initializing the component or switching the active panel */
    destroyInactivePanels?: boolean;
    /** The callback function when close button is clicked */
    onClose?: () => void;
    /** This callback function is called when the content resize is started */
    onResizeStart?: (size: number) => void;
    /** This callback function is called when the content resize is completed */
    onResizeStop?: (size: number) => void;
    /** Contents displayed in the content */
    children?: React.ReactNode;
    /** Applies emotion styles to the top-level element in the component. Ask in #dubois before using. */
    dangerouslyAppendEmotionCSS?: Interpolation<EmotionTheme>;
    /** For migration purposes. Enables updates where panel is overlay and toggleable for non closable panel in compact mode */
    enableCompact?: boolean;
    /** Applies styles to the react-resizable container */
    resizeBoxStyle?: CSSProperties;
    /** Removes side border for cases where Navbar is not used */
    noSideBorder?: boolean;
    /** Whether to hide the resize handle */
    hideResizeHandle?: boolean;
}
export interface PanelProps {
    /** The panel id */
    panelId: number;
    /** Contents displayed in the the panel */
    children?: React.ReactNode;
    /** Forced render of content in the panel, not lazy render after clicking */
    forceRender?: boolean;
    /** Applies emotion styles to the top-level element in the component. Ask in #dubois before using. */
    dangerouslyAppendEmotionCSS?: Interpolation<EmotionTheme>;
}
export interface PanelHeaderProps extends AnalyticsEventProps<DesignSystemEventProviderAnalyticsEventTypes.OnClick> {
    /** Contents displayed in the header section of the panel */
    children?: React.ReactNode;
    /** Applies emotion styles to the top-level element in the component. Ask in #dubois before using. */
    dangerouslyAppendEmotionCSS?: Interpolation<EmotionTheme>;
}
export interface PanelHeaderTitleProps {
    /** Text displayed in the header section of the panel */
    title: string;
    /** Applies emotion styles to the top-level element in the component. Ask in #dubois before using. */
    dangerouslyAppendEmotionCSS?: Interpolation<EmotionTheme>;
}
export interface PanelHeaderButtonProps {
    /** Optional buttons displayed in the panel header */
    children?: React.ReactNode;
    /** Applies emotion styles to the top-level element in the component. Ask in #dubois before using. */
    dangerouslyAppendEmotionCSS?: Interpolation<EmotionTheme>;
}
export interface PanelBodyProps {
    /** Contents displayed in the body of the panel */
    children?: React.ReactNode;
    /** Applies emotion styles to the top-level element in the component. Ask in #dubois before using. */
    dangerouslyAppendEmotionCSS?: Interpolation<EmotionTheme>;
}
export declare function Nav({ children, dangerouslyAppendEmotionCSS }: NavProps): JSX.Element;
export declare const NavButton: React.ForwardRefExoticComponent<NavButtonProps & React.RefAttributes<HTMLButtonElement>>;
export declare const Content: React.ForwardRefExoticComponent<ContentProps & React.RefAttributes<HTMLDivElement>>;
export declare function Panel({ panelId, children, forceRender, dangerouslyAppendEmotionCSS, ...delegated }: PanelProps): JSX.Element | null;
export declare function PanelHeader({ children, dangerouslyAppendEmotionCSS, componentId }: PanelHeaderProps): JSX.Element;
export declare function PanelHeaderTitle({ title, dangerouslyAppendEmotionCSS }: PanelHeaderTitleProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function PanelHeaderButtons({ children, dangerouslyAppendEmotionCSS }: PanelHeaderButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function PanelBody({ children, dangerouslyAppendEmotionCSS }: PanelBodyProps): JSX.Element;
export declare const Sidebar: {
    ({ position, children, dangerouslyAppendEmotionCSS, ...dataProps }: SidebarProps): JSX.Element;
    Content: React.ForwardRefExoticComponent<ContentProps & React.RefAttributes<HTMLDivElement>>;
    Nav: typeof Nav;
    NavButton: React.ForwardRefExoticComponent<NavButtonProps & React.RefAttributes<HTMLButtonElement>>;
    Panel: typeof Panel;
    PanelHeader: typeof PanelHeader;
    PanelHeaderTitle: typeof PanelHeaderTitle;
    PanelHeaderButtons: typeof PanelHeaderButtons;
    PanelBody: typeof PanelBody;
};
//# sourceMappingURL=Sidebar.d.ts.map