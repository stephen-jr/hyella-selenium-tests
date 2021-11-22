const randomString = ( options, varname ) => {
    let length = 8;
    let type   = 'alphanumeric';
    let o = options.split( '|' );
    for ( let i = 0 ; i < 2 ; i ++ ) {
        if ( o[i] && o[i].match( /^\d+$/ ) )
            length = o[i];

        if ( o[i] && o[i].match( /^(?:alpha)?(?:numeric)?$/ ) )
            type = o[i];
    }

    switch( type ) {
        case 'alpha'        : storedVars[ varname ] = randomAlpha( length ); break;
        case 'numeric'      : storedVars[ varname ] = randomNumeric( length ); break;
        case 'alphanumeric' : storedVars[ varname ] = randomAlphaNumeric( length ); break;
        default             : storedVars[ varname ] = randomAlphaNumeric( length );
    };
};

const randomNumeric = ( length ) => {
    return generateRandomString( length, '0123456789'.split( '' ) );
}

const randomAlpha = ( length ) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' );
    return generateRandomString( length, alpha );
}

const randomAlphaNumeric = ( length ) => {
    let alphanumeric = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' );
    return generateRandomString( length, alphanumeric );
}

const generateRandomString =( length, chars ) => {
    let string = '';
    for ( let i = 0 ; i < length ; i++ )
        string += chars[ Math.floor( Math.random() * chars.length ) ];
    return string;
}
