declare module 'react-native-mathjax-html-to-svg' {
    import {StyleProp, ViewStyle} from 'react-native';

    type Props = {
        fontSize?: number
        color?: string
        fontCache?: boolean
        latex?: any[]
        renderText: (text: string) => JSX.Element
        style?: StyleProp<ViewStyle>
    };

    export function MathJaxSvg(props: Props) ;

    export function getSvgNodes(text: string)
}
