import '../styles/globals.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>React Tests</title>

        {/*MUI Responsiveness*/}
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        {/*MUI Roboto font*/}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        {/*MUI IconButton*/}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// function GlobalStyle() {
//   return (
//     <style global jsx>{`
//       * {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//         list-style: none;
//       }
//       body {
//         font-family: 'Open Sans', sans-serif;
//       }
//       /* App fit Height */ 
//       html, body, #__next {
//         min-height: 100vh;
//         display: flex;
//         flex: 1;
//       }
//       #__next {
//         flex: 1;
//       }
//       #__next > * {
//         flex: 1;
//       }
//       /* ./App fit Height */ 
//     `}</style>
//   );
// }


// export default function CustomApp({ Component, pageProps }) {

//   return (
//       <>
//           <GlobalStyle />
//           <Component {...pageProps} />
//       </>
//   );

// }

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp;
