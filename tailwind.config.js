
module.exports = {
    darkMode: 'class',
    purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js', './src/**/*.ts', './src/**/*.tsx'],
    theme: {
        extend: {
            keyframes: {
                fade: {
                    '0%': {
                        backgroundColor: 'transparent',
                    },
                    '100%': {
                        backgroundColor: '#232a34',
                    },
                },
            },
            animation: {
                fade: 'fade 0.5s linear',
            },
            height: {
                '60vh': '60vh',
                '66px':  '66px',
                '500vh':  '500vh',
            },
            width: {
                '90': '90%'
            },
            colors: {
                gray: {
                    100: '#232a34',
                },
            },
            fontFamily: {
                roboto: ['Rubik', 'Inter', 'system-ui', '-apple-system'],
            },
        },
    },

    variants: {
        extend: {
            boxShadow: ['dark'],
        },
    },
}
