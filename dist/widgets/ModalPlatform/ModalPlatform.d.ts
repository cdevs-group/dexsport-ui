/// <reference types="react" />
interface IProps {
    platforms: Array<{
        name: string;
        link: string;
        icon?: string;
    }>;
    linkAbout?: string;
    title: string;
    onDismiss: () => null;
}
declare const ModalPlatform: ({ onDismiss, title, platforms, linkAbout }: IProps) => JSX.Element;
export default ModalPlatform;
