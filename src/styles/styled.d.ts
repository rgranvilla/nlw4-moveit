import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            white: string;
            background: string;
            bgHeaderBar: string;
            textHeaderBar: string;
            textContrastHeaderBar: string;
            handleColor: string;
            bgProgress: string;
            text: string;
            textHighlight: string;
            title: string;
            red: string;
            progress: string;
            blue: string;
            blueDark: string;
            blueTwitter: string;
        }
    }
}