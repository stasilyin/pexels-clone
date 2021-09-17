
module.exports = {
    darkMode: 'class',
    purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js', './src/**/*.ts', './src/**/*.tsx'],
    theme: {
        extend: {
            screens: {
                '3xl': '2048px',
                '2-3xl': '1900px',
                '2xl': '1920px',
                '1h-signUp': { raw: '(min-height: 927px)' },
                '1h-signIn': { raw: '(min-height: 892px)' },
            },
            colors: {
                gray: {
                    950: 'rgba(152, 152, 152, 0.4)',
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
