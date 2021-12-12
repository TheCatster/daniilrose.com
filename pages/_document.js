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
          <script>
            /* @source: https://git.sr.ht/~thecatster/personal-site-neo
            @licstart The following is the entire license notice for the
            JavaScript code in this page. Copyright (C) 2021 Daniil Rose The
            JavaScript code in this page is free software: you can redistribute
            it and/or modify it under the terms of the GNU General Public
            License (GNU GPL) as published by the Free Software Foundation,
            either version 3 of the License, or (at your option) any later
            version. The code is distributed WITHOUT ANY WARRANTY; without even
            the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
            PURPOSE. See the GNU GPL for more details. As additional permission
            under GNU GPL version 3 section 7, you may distribute non-source
            (e.g., minimized or compacted) forms of that code without the copy
            of the GNU GPL normally required by section 4, provided you include
            this license notice and a URL through which recipients can access
            the Corresponding Source. @licend The above is the entire license
            notice for the JavaScript code in this page. */
          </script>
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
