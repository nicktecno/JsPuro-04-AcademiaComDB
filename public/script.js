const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems){
    if (currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
    }

// Lógica para aparecer números das páginas resumidos no frontend

   

function paginate (selectedPage, totalPages){

let pages = [],
    OldPage

    for(let currentPage = 1; currentPage <= totalPages; currentPage++){

        

        const firstAndLastPage = currentPage == 1 || currentPage == totalPages
        
        const pagesAfterSelectedPage = currentPage <= selectedPage +2
        const pagesBeforeSelectedPage = currentPage >= selectedPage -2


        if(firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage){
            if (OldPage && currentPage - OldPage > 2) {
            pages.push("...")
        }

            if(OldPage && currentPage - OldPage ==2) {
                pages.push(OldPage + 1)

            }

            pages.push(currentPage)
            oldPage = currentPage


    }
}
    return pages

}

function createPagination(pagination){
    const filter = pagination.dataset.filter
    const page = +pagination.dataset.page;
    const total = +pagination.dataset.total;
    const pages = paginate(page, total)
    
    let elements = ""
    
    for(let page of pages){
        if(String(page).includes("...")){
            elements += `<span>${page}</span>`
        }else{
            if (filter){
                
                elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
            
            } else{
    
            elements += `<a href="?page=${page}">${page}</a>`
        }
    
    } 
    
    }
    pagination.innerHTML = elements

}

const pagination = document.querySelector(".pagination")

if(pagination){
    createPagination(pagination)


}

