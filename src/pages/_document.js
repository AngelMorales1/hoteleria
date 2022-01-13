import Document ,{ Html,Head,Main,NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <script src="https://cdn.tailwindcss.com"></script>
                </Head>
                <body>
                   <Main/>
                </body>
                <NextScript/>
            </Html>
        );
    }
}