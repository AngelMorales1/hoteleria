import Document ,{ Html,Head,Main,NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    
                </Head>
                <body>
                   <Main/>
                   <NextScript/>
                   <script src="https://cdn.tailwindcss.com"></script>
                </body>
               
            </Html>
        );
    }
}