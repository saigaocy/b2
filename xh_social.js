var moyucheck = new Vue({
    el:'#moyucheck',
    data:{
    	data:{},
    },
    mounted(){
        let userData = JSON.parse(localStorage.getItem('userData'))
        if(!userData && moyusocial.is_logged=='1'){
            this.$https.post(b2_global.home_url+'/wp-admin/admin-ajax.php?action=moyu_token',Qs.stringify(this.data)).then(res=>{
				console.log(res)
				if(res.status == 200){
					if(res.data.status == 500){
						this.$toasted.show(res.data.error, { 
						theme: 'primary',
						position: 'top-center', 
						duration : 4000,
						type:'error'
						})
						return
					}
                	this.data.avatar = res.data.data.avatar
                    this.data.nonce = res.data.data.nonce
                    this.data.token = res.data.data.token
                    this.data.user_display_name = res.data.data.user_display_name
                    this.data.user_link = res.data.data.user_link
                    this.data.verify = res.data.data.verify
                    this.data.verify_icon = res.data.data.verify_icon
                    localStorage.setItem('userData',JSON.stringify(this.data))
                    userTools.userData = this.data
                    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + userTools.userData.token
                }else{
					this.$toasted.show('ajax失败', { 
                        theme: 'primary',
                        position: 'top-center', 
                        duration : 4000,
                        type:'error'
                	})
				}
                location.reload()
                return 
            })
        }   
    }
})
