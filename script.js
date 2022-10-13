window.addEventListener('load', () => {

const peoples = [
    
    {
        name:'Elora Tilahun',
        img:'./images/photo_2022-07-21_21-36-20.jpg',
        time:' 12:55am',
        lastmessage:' AM: <span>pic new aman teftehal',
        unseenmsg:'11',
        catagory : 'contact',
        status: 'last seen recently',
        id :'0'
    },
    {
        name:'Jossy',
        img:'./images/photo_2022-06-30_02-19-58.jpg',
        time:' 12:55am',
        lastmessage:' im sexi',
        unseenmsg:'110',
        catagory : 'contact',
        status: 'last seen recently',
        id :'1'
    },
    {
        name:'kdd',
        img:'./images/707b51639e657545605d64e558a8aeb4.jpg',
        time:' 12:55am',
        lastmessage:'apparent geter gebtenal',
        unseenmsg:'1',
        catagory : 'contact',
        status: 'last seen recently',
        id :'2'
    },
    {
        name:'Yene Tube',
        img:'./images/yene tube.jpg',
        time:' 12:55am',
        lastmessage:'በሃገራችህን በደረሰው የ ዋጋ ግሽበት...',
        unseenmsg:'1110',
        catagory : 'channel',
        status: '102,000 subscribers',
        id :'3'
    },
    {
        name:'We-can-do',
        img:'./images/photo_2022-06-18_11-24-49.jpg',
        time:' 12:55am',
        lastmessage:' its a call form mobo',
        unseenmsg:'99',
        catagory : 'channel',
        status: '1000 subscribers',
        id :'4'
    },
    {
        name:'  JACK SPAROW',
        img:'./images/photo_2022-06-17_21-21-47.jpg',
        time:' 12:55am',
        lastmessage: "i'll find you and i will kill you",
        unseenmsg:'11',
        catagory : 'bot',
        status: 'father bot',
        id :'5'

    },
    {
        name:'TIKVAH-ETHIOPIA',
        img:'./images/photo_2021-08-12_11-24-32.jpg',
        time:' 12:55am',
        lastmessage:'በተለያዩ ስራ workproject...',
        unseenmsg:'11',
        catagory : 'contact',
        status: '1,100,320 subscribers',
        id :'6'
    },
    {
        name:'Team Group',
        img:'./images/photo_2022-07-21_21-36-20.jpg',
        time:' 12:55am',
        lastmessage:' AM: <span>pic new aman teftehal',
        unseenmsg:'999',
        catagory : 'group',
        status: 'onely one person',
        id :'7'
    },
    {
        name:'greate group',
        img:'./images/photo_2022-07-21_21-36-20.jpg',
        time:' 12:55am',
        lastmessage:' AM: <span>pic new aman teftehal',
        unseenmsg:'11',
        catagory : 'group',
        status: '200,000 subscribers',
        id :'8'
    },
]

const headerBody = document.querySelector('.header-body')
const searchMenu = document.querySelector('.menu-icon')
const menuList = document.querySelector('.menu-list')
const photoAndName = document.querySelector('.photo-name')
const webLeft = document.querySelector('.web-left')

const searchInput = document.querySelector('.search-input')
console.log(searchResult.value);
const telegram = document.querySelector('.telegram')
const body = document.body

///////////////////////////////////////////////////////
const services = document.querySelector('.services')
const allServices = services.children;
const allServecedArray = [...allServices]
const allServicessCount= allServices.length

function removeServices(){
    for(let i = 0; i<allServicessCount; i++){
        allServecedArray[i].classList.remove('active')
    }
}
const peopleHtmlList = function peopleListHtml(chatPeoples){
    return `<div id='${chatPeoples.id}' class="people-lists">
                <div class="image">
                    <img class="people-img" src="${chatPeoples.img}" alt="">
                </div>

                <div class="about-people">
                    <div class="name">
                    ${chatPeoples.name}
                    </div>
                    <div class="last-message">
                    ${chatPeoples.lastmessage}
                    </div>
                </div>

                <div class="unseen-messages">
                    <div class="time-message-received">
                    ${chatPeoples.time}
                    </div>
                    <div class="number-of-unseen-messages">
                    ${chatPeoples.unseenmsg}
                    </div>
                </div>

            </div>`
}

const searchHtml = function searchHtml(chatPeoples){

    return `<div id='${chatPeoples.id}' class="people-lists">
    <div class="image">
        <img class="people-img" src="${chatPeoples.img}" alt="">
    </div>

    <div class="about-people">
        <div class="name">
        ${chatPeoples.name}
        </div>
        <div class="last-message">
        ${chatPeoples.status}
        </div>
    </div>

    <div class="unseen-messages">
        
    </div>

</div>
`
}

const mouse = {
    x: undefined,
    y:undefined
}

searchInput.addEventListener('click', (e)=>{
    fillterInputValue("")
    
     console.log(e);
    searchInput.addEventListener('keyup', ()=>{
        const inputValue = searchInput.value.toLowerCase();
       
       
        fillterInputValue(inputValue)
        if(inputValue == 'a'){
            allServiceArray()
            services.style.display = 'flex'
            headerBody. classList.remove('header-body-active')
        }
    })
})

function searchResult(){
   
}


allServiceArray()

function fillterInputValue(inputValue){
         
    const filterInputValue = peoples.filter((person)=>{
        return person.name.toLowerCase().includes(`${inputValue}`)
    })

    headerBody.innerHTML = filterInputValue.map(function (chatPeoples){

        return searchHtml(chatPeoples) 
        
    }).join("")
    services.style.display = 'none'
    headerBody. classList.add('header-body-active')

}





function allServiceArray(){
    allServecedArray.forEach((e)=>{  
    ///////111111 SOME STYLE 11111111//////////   
        e.style.fontSize = '15.5px'
        e.style.display= 'flex'
        e.style.alignItem = 'center'
        e.style.paddingLeft = '15px'
        e.style.paddingRight = '15px'
        e.style.paddingBottom = '10px'
    ///////11111111111111////////// 
    //----------add active class when first screen loads
        allServecedArray[0].classList.add('active')
        headerBody.innerHTML = peoples.map(function (chatPeoples){

                                    return peopleHtmlList(chatPeoples) 
                                }).join("")
    const friends = document.querySelectorAll('.people-lists')
                    friendsfun(friends)

    // -------------------ADD CLICK EVENT FOR SERVICES-------------------------//
        e.addEventListener('click',(event)=>{
        
            // //////////// NAVIGATE THROUGH SERVICESS //////////  
            removeServices()
            const currentService = event.currentTarget
            currentService.classList.add('active') 

            ///////////////////// CHANGE BODY CONTENT WHEN SOME SERVICE CLICKED ///////////////////////////////////
            const catagory =  event.path[0].getAttribute('id').toLowerCase();

        //    ///////////////// FITER POPLES ARRAY //////////////////////////////
            const filteredPeople = peoples.filter((person)=>{
                                        if(catagory == 'all-chats'){
                                            return person
                                        }
                                        else{
                                            return person.catagory.toLowerCase() == `${catagory}`
                                        }
                                    })

            ///////////////////// MAP FILTERED ARRAY //////////////////
            const allPeople = filteredPeople.map(function (chatPeoples){
                                        return peopleHtmlList(chatPeoples) 
                                    })

            headerBody.innerHTML = allPeople.join("")
            const friends = document.querySelectorAll('.people-lists')
            friendsfun(friends)
    /////////////////////////////////////////////////////
    /////////////////////////////
    })  
    })
}
// ///////////////////////////////////////////////////
/////////////////////////////////////////////////////






////////////////  FUNCTION TO REMOVE ACTIVE CLASS IN PEOPLE LIST ///////
function removeClass(friendsCount,friends){
    for(let i = 0; i<friendsCount; i++){
        friends[i].classList.remove('active-chat')
    }
}

function friendsfun(friends){
   
    const friendsCount = friends.length
    const friendsArray = [...friends]
 
   

    friends.forEach((e)=>{  
        // friends[0].classList.add('active-chat')
        // ////////////////////////////////////////////////
        
        e.addEventListener('click',(event)=>{
            removeClass(friendsCount,friends)
        const currentFriend = event.currentTarget
    
        
        const indeOfFA =  currentFriend.getAttribute('id')
       
       currentFriend.classList.add('active-chat') 
        ///////////////////////////////////////////
        const image = peoples[indeOfFA].img
        const name = peoples[indeOfFA].name
        const status = peoples[indeOfFA].status
        const profile = header_profile(image,name,status)
        photoAndName.innerHTML = profile

    })
    
    })
}


///////////////////// TO CHANGE HEADER NAME AND PIC ///////////////////
function header_profile(img,name, status){
    
     return  `<div class="photo">
                <img class="people-img" src="${img}" alt="">
            </div>
            <div class="name">
                <div class="real-name">
                    ${name}
                </div>
                <div class="status" style="font-size:12px; color: rgb(167, 164, 164); ">
                    ${status}
                </div>
            
            </div>`
}
// ////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////

function checkMenuList(){
    if(menuList.style.display == 'flex'){
        return true
    }
}

function toggleMenuList(){
    searchMenu.addEventListener('click',(e)=>{
    
     console.log(e);

            if ( checkMenuList()){
                menuList.style.display = 'none'
                menuList.style.transition = '1s'
            }
            else{
                menuList.style.display = 'flex'
            }
            })
}
toggleMenuList()



// window.addEventListener('click',(e)=>{
   
//     const targetx = e.target.parentElement;
//     console.log(targetx == 'menu-list');
//     if(targetx.classList.contains('menu-list')){
//        menuList.style.display = 'none'
//     }
//     else{
//        menuList.style.display = 'flex'
//     }
// })




//////////////////////////////////////////////////////////////
// ///////////////// ALL MENU ACCESS ////////////////////////
////////////////////////////////////////////////////////////
const allMenulist = document.querySelectorAll('.s')
const setting = document.querySelector('.setting')
const dlswitch = document.querySelector('.switch')
const aniswitch = document.querySelector('.ms-switch')


const archiveChat = document.querySelector('.archived_chat')
const leftHeader  = document.querySelector('.left-header')

allMenulist.forEach((e)=>{
    e.addEventListener('click',(event)=>{
        const currentMenu = event.currentTarget
        let count = 1;
        if(currentMenu.classList.contains('saved-msg')){

        }
        else if(currentMenu.classList.contains('archid-chars')){
           archiveChat.style.zIndex = '100'
           leftHeader.style.zIndex = '-1'
           menuList.style.display = 'none'
        }
        else if(currentMenu.classList.contains('contact')){
            
        }
        else if(currentMenu.classList.contains('setting')){
            setting.style.zIndex ='1000'
            menuList.style.display = 'none'
        }
        else if(currentMenu.classList.contains('dark-mode')){
           
            if(currentMenu.classList.contains('dark')){
                dark_to_light_mode()
                currentMenu.classList.remove('dark')
                dlswitch.firstChild.nextSibling.style.left = '-14%'
                
            }else{
                light_to_dark_mode()
                currentMenu.classList.add('dark')
                dlswitch.firstChild.nextSibling.style.left = '45%'
            }
           
           
        }
        else if(currentMenu.classList.contains('animation')){
            
        }
        else if(currentMenu.classList.contains('telegram-feature')){
            
        }
        else if(currentMenu.classList.contains('report-bug')){
            
        }
        else if(currentMenu.classList.contains('z-version')){
            
        }
        else if(currentMenu.classList.contains('old-version')){
            
        }
    })
})

const arrow2 = document.querySelectorAll('.arrow')

arrow2.forEach((e)=>{
e.addEventListener('click', ()=>{
    setting.style.zIndex ='-1000'
    archiveChat.style.zIndex ='-1000'
    leftHeader.style.zIndex = '0'
    setting.style.transition = '0.5s'
})
})



function dark_to_light_mode(){
    const root = document.querySelector(':root')
    
    root.style.setProperty('--blackish','rgb(224, 221, 221)')
    root.style.setProperty('--trans-dark','hsl(0, 4%, 90%)')
    root.style.setProperty('--dark','hsl(0, 4%, 90%)')
    root.style.setProperty('--purple','hsl(216, 92%, 31%)')
    root.style.setProperty('--darker','white')
    root.style.setProperty('--gray','hsl(0, 0%, 50%)')
    root.style.setProperty('--light','hsl(0, 0%, 16%)')
    root.style.setProperty('--light-purple','hsl(216, 97%, 57%)')
    root.style.setProperty('--placeholder','rgb(5, 5, 5)')

}
function light_to_dark_mode(){
    const root = document.querySelector(':root')

    root.style.setProperty('--blackish','rgb(43, 41, 41)')
    root.style.setProperty('--trans-dark','hsla(0, 9%, 11%, 0.904)')
    root.style.setProperty('--dark','hsl(0, 0%, 39%)')
    root.style.setProperty('--purple','hsl(248, 100%, 73%)')
    root.style.setProperty('--darker','hsl(0, 0%, 13%)')
    root.style.setProperty('--gray','hsl(0, 0%, 52%)')
    root.style.setProperty('--light','hsl(0, 0%, 100%)')
    root.style.setProperty('--light-purple','hsl(250, 64%, 67%)')
    root.style.setProperty('--placeholder','rgb(219, 218, 218)')
}


/////////////////// SEARCH INPUT ///////////////////
////////////////////////////////////////////////////

// const searchInput = document.querySelector('.search-input')

// console.log(searchInput.value);

// searchInput.addEventListener('keyup',()=>{
//     let searchValue = searchInput.value  
//     console.log(searchValue);
//     const filtersearch = peoples.filter((person)=>{

//         return person.name.includes(`${searchValue.toLowerCase()}`)
//     })

//    const allPeople =  filtersearch.map((chatPeoples)=>{
//         return serchResult(chatPeoples)
//     })
    
// })

const intro1 = document.querySelector('.intro-text1')
const intro2 = document.querySelector('.intro-text2')
const intro3 = document.querySelector('.intro-text3')
const introPage = document.querySelector('.intro-page')
const text = document.querySelectorAll('.text')

text.forEach((e)=>{
    e.style.animationName = "amimate-text-forwared"

    sleep(4000)
    .then(()=>{ e.style.animationName = "amimate-text-back" }) 
    .then(()=> sleep(2000))
    .then(()=>{ introPage.style.display = 'none'}) 
            
})

    
    
 



// function amimateForwared(){
//     intro1.style.animationName = "amimate-text-forwared"
//     intro2.style.animationName = "amimate-text-forwared"
//     intro3.style.animationName = "amimate-text-forwared"
// }
// amimateForwared()



// setTimeout(animateBackwared,4000)
// function animateBackwared(){
//     intro1.style.animationName = "amimate-text-back"
//     intro2.style.animationName = "amimate-text-back"
//     intro3.style.animationName = "amimate-text-back"
// }

const typeToSend = document.querySelector('.type-to-send')
const paperClip = document.getElementById('paper-clip')
console.log(paperClip);

typeToSend.addEventListener('click',(e)=>{
   console.log(paperClip);
   paperClip.textContent = 'send'
   e.innerHTML = '<h1></h1>'


})

paperClip.addEventListener('click',(e)=>{
    e.preventDefault()
    paperClip.value = ""
    
    e.innerHTML = `<i class="fa-solid fa-paperclip">`
})

})
