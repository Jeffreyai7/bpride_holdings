/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Enable JIT mode
  content: [
    "./*.html", // Include all HTML files in the root directory
    "./src/**/*.{js,ts,jsx,tsx}", // Include any JS/TS/React files
  ],
  theme: {
    extend: {
      colors:{
        bpblack:"var(--bpdark-dark)",
        bpyellowlight: "var(--bpyellow-light)",
        bpdarklight: "var(--bpdark-light)",
        bpyellowdark: "var(--bpyellow-dark)"

      },
      fontSize:{
        headingTextM:  "var(--headingTextM)",
        headingTextD: "var(--headingTextD)",
        bigHeadingtextM: 'var(--bigHeadingtextM)',
        bigHeadingtextD: 'var(--bigHeadingtextD)',
        paragtextM: "var(--paragtextM)",
        paragtextD: "var(--paragtextD)",
        boxtextM: "var(--boxtextM)",
        boxtextD: "var(boxtextD)",
        boxHeadingtextM: "var(boxHeadingtextM)" ,
        boxHeadingtextD: "var(--boxHeadingtextD)",
        boxsubheadingtextM: "var(--boxsubheadingtextM)",
        boxsubheadingtextD: "var(--boxsubheadingtextD)",
        boxbuttonM: "var(--boxbuttonM)", 
        boxbuttonD:'var(--boxbuttonD)' ,
        responsive: 'clamp(2rem, 4.2vw, 4rem)',
        responsivetext: 'clamp(1rem, 2vw, 1.5rem)'
      },
      backgroundImage:{
        realestate:"url(src/assets/images/realestatef.png)",
        digital:"url(src/assets/images/digitalf.png)",
        academy:"url(src/assets/images/academyf.png)",
        web:"url(src/assets/images/webhosting.png)",
        circle:"url(src/assets/images/Ellipsecir.png)",
        blurcirb:"url(src/assets/images/Ellipseb.png)",
        blurcirs:"url(src/assets/images/Ellipsesm.png)",
        aboutbg:"url(src/assets/images/backgd.jpg)"
      }

    },
  },
  plugins: [],
}

