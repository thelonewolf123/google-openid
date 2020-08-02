var OidcSettings = {    
    authority : 'https://accounts.google.com/o/oauth2/v2/auth?',
    client_id : '',
    redirect_uri : 'http://127.0.0.1:3000',    
    response_type : 'id_token token',
    scope : 'openid https://www.googleapis.com/auth/userinfo.profile',
    post_logout_redirect_uri : 'http://127.0.0.1:3000',
    metadataUrl:'https://accounts.google.com/.well-known/openid-configuration'
         
};


export default OidcSettings;