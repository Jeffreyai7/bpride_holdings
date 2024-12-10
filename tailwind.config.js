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
        responsive: 'clamp(2rem, 4.2vw, 3rem)',
        responsivetext: 'clamp(0.8rem, 2vw, 1.2rem)'
      },
      backgroundImage:{
        realestate:"url(/images/realestatef.png)",
        digital:"url(/images/digitalf.png)",
        academy:"url(/images/academyf.png)",
        web:"url(/images/webhosting.png)",
        circle:"url(/images/Ellipsecir.png)",
        blurcirb:"url(/images/Ellipseb.png)",
        blurcirs:"url(/images/Ellipsesm.png)",
        aboutbg:"url(/images/backgd.jpg)"
      },
      boxShadow: {
        'large': '0 0 500px 500px rgba(0, 0, 0, 0.5)',
      },

    },
  },
  plugins: [],
}

