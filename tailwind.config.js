
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
                '60vh': '70vh',
                '66px':  '66px',
                '57px':  '57px',
            },
            width: {
                '90': '90%',
                '53px': '53px'
            },
            borderRadius: {
                '6px': '6px',
                '20px': '20px'
            },
            colors: {
                gray: {
                    300: '#e8e8e8',
                    200: '#5e5e5e',
                    100: '#232a34',
                },
                blue: {
                    100: '#0064f9'
                },
            },
            fontFamily: {
                rubik: ['Rubik', 'Inter', 'system-ui', '-apple-system'],
            },
        },
    },

    variants: {
        extend: {
            boxShadow: ['dark'],
        },
    },
}
