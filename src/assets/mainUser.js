import sql from '../assets/sql.js'

export default{
    getEmail(){
        return window.location.search.substring(23, window.location.search.search(':::'))
    },

    getFirstname(){
        var firstname = window.location.search.substring(window.location.search.search(':::')+3, window.location.search.search(';;;'))
        return this.getCyrillicString(firstname)
    },

    getLastname(){
        var lastname = window.location.search.substring(window.location.search.search(';;;')+3, window.location.search.search('---'))
        return this.getCyrillicString(lastname)
    },

    getTokenExpiration(){
        return window.location.search.substring(1,33).replace(/%+/g, ' ').toLowerCase()
    },

    differenceInMinutes(){
        var tokenExpiration = new Date(
            parseInt(this.getTokenExpiration().substring(6,10)), parseInt(this.getTokenExpiration().substring(3,5))-1, parseInt(this.getTokenExpiration().substring(0,2)),
            parseInt(this.getTokenExpiration().substring(14,16)), parseInt(this.getTokenExpiration().substring(17,19)), parseInt(this.getTokenExpiration().substring(20,22)),
        )
        var now = new Date()
        var diffMs = (now - tokenExpiration);
        return Math.round(((diffMs % 86400000) % 3600000) / 60000);
    },

    checkTokenExpiration(){
        if(this.differenceInMinutes() > 14)
            window.location = '../?sessionExpired'
        else{
            this.refreshTokenExpiration()
        }
    },

    refreshTokenExpiration(){
        const d = new Date();
        let time = d.getTime();
        var newToken = time + MD5(this.getEmail).toString()
        var tokenExpiration = new Date().toLocaleString()
        window.location = sql.Refresh() + '?email=' + this.getEmail + '&token=' + this.getToken() + '&newToken=' + newToken + '&=tokenExpiration' + tokenExpiration
    },

    getCyrillicString(str){
        str = str.replace(/%C4%8D+/g, 'č')
        str = str.replace(/%C4%8C+/g, 'Č')
        str = str.replace(/%C4%87+/g, 'ć')
        str = str.replace(/%C4%86+/g, 'Ć')
        str = str.replace(/%C5%A1+/g, 'š')
        str = str.replace(/%C5%A0+/g, 'Š')
        str = str.replace(/%C4%91+/g, 'đ')
        str = str.replace(/%C4%90+/g, 'Đ')
        str = str.replace(/%C5%BE+/g, 'ž')
        str = str.replace(/%C5%BD+/g, 'Ž')
        return str
    }
}