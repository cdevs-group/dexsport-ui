/// <reference types="react" />
interface IProps {
    texts: {
        title: string;
        button: string;
    };
    images?: string;
    link?: string;
}
declare const Platform: ({ link, texts, images }: IProps) => JSX.Element;
export default Platform;
