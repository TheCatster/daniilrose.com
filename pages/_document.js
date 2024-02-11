import Document, { Html, Head, Main, NextScript } from "next/document";
import { TypographyStyle } from "react-typography";
import typography from "../utils/typography";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {" "}
          <TypographyStyle typography={typography} />
          {
            // eslint-disable-next-line
          }{" "}
        </Head>
        <body className="h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
