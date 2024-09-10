//Cookies Window
const cookiesModal = new bootstrap.Modal(document.getElementById("cookies-banner"));
cookiesModal.show()

//FastCall Widget
const fastCallWidget = {
    container:document.getElementById("fast-call"),
    switchBtn:document.getElementById("fast-call-button"),

    switch:function(){
        if(this.container.classList.contains("active")){
            this.switchBtn.classList.remove("icon-cancel");
            this.container.classList.remove("active")
            this.switchBtn.classList.add("icon-phone");
        }
        else{
            this.container.classList.add("active")
            this.switchBtn.classList.add("icon-cancel");
            this.switchBtn.classList.remove("icon-phone");
        }
    }
}

fastCallWidget.switchBtn.addEventListener("click",fastCallWidget.switch.bind(fastCallWidget));