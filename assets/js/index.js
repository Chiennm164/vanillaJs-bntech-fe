const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



// list các dự án
let projects = [
    {
        id: 1,
        title: 'BIG C Tân Hiệp 1',
        images: [
            './assets/images/du-an-4.png',
            './assets/images/du-an-3.png',
            './assets/images/du-an-2.png',
            './assets/images/du-an-1.png'
        ],
        info: {
            client: 'BigC',
            time: '08-2020',
            address: 'Tân Hiệp - TPHCM',
            system: 'Mitsubitshi',
            wattage: '3kw-1.100kw',
        },
        detail:

            [
                ['Nhà máy đông lạnh',
                    `Đối với nhà máy dông lạnh , yêu cầu tiên quyết là kiểm soát nhiệt độ bảo quản sản phẩm trong kho lạnh .
             Cùng việc lắp đặt kho lạnh cho khách hàng , BKTECH có thể thiết kế , cung cấp và lắp đặt hệ thống điều khiển , kiểm soát
             , giám soát , giảm nhiệt độ bằng những thiết bị điện tử của những nhà cung cấp hàng đầu thế giới như ABB , Dixell , Schneider, ...
             Với công nghệ 4.0 , khi khách hàng có yêu cầu , BKTECH có thể hỗ trợ giảm sát , cảnh báo từ xa cho khách hàng khi có tín hiệu
             sự cố đồng thời tư vấn khách hàng xử lý sự cố trước khi cần sự có mặt của bộ phận dịch vụ bảo trì BKTECH.
             `],
                [
                    'Cấu tạo - Nguyên Lý kho lạnh',
                    `Kho lạnh được lắp ráp từ những tấm panel cách nhiệt .
         Các tấm panel kết nối với nhau bằng cơ chế ngàm Z-lock cho tấm vạch và trần .
         Cấu tạo cảu panel cách nhiệt gốm 2 lớp tole colorbond hoặc inox , lớp giữa là form cách nhiệt .`,
                    [
                        `Độ dài của tôle colorbond hoặc innox từ 0.41 mm đến 1.5 mm .`,
                        `Độ dày của panel từ 50 mm đến 200 mm tương ứng vơi nhu cầu của khách hàng và sản phẩm .`,
                        `Khổ rộng của tấm panel từ 600 mm đến 1,120 mm .`,
                        `Chiều dài của tấm panel tối đa là 12,0000mm .`],
                    `Tấm panel trần dài sẽ được thiết kế có cáp treo trên
             khung đà mái nhà để hỗ trợ tăng-đưa . Vách sẽ được mỗ và gắn một khung cửa để làm cửa ra vào .`
                ],
                [
                    'Đặc kiểm kỹ thuật',
                    [
                        'Công suất : 1,000 MT đến 20,000 MT . ',
                        ' Foam chống cháy lan theo tiêu chuẩn Việt Nam .',
                        'Ứng dụng : sử dụng làm kho lạnh cho thuê , kho chứa hàng lạnh phục vụ trong các xưởng chế biến thuỷ sản , thực phẩm . ',
                        ' Nhiệt độ kho từ -60 độ C/ ~ 20 độ C tuỳ thuộc vào yêu cầu của khách hàng và sản phẩm .'
                    ]
                ]
            ]
        ,
        des: 'chi tiet cong nghiep lanh,chi tiet cong nghiep lanh,chi tiet cong nghiep lanh,chi tiet cong nghiep lanh,chi tiet cong nghiep lanh,chi tiet cong nghiep lanh',
        top: true,
        style: 1,
    },
    {
        id: 2,
        title: 'BIG C Tân Hiệp 2',
        images: [
            './assets/images/du-an-4.png',
            './assets/images/du-an-3.png',
            './assets/images/du-an-2.png',
            './assets/images/du-an-2.png'
        ],
        info: {
            client: 'BigC',
            time: '08-2020',
            address: 'Tân Hiệp - TPHCM',
            system: 'Mitsubitshi',
            wattage: '3kw-1.100kw',
        },
        detail: [

            ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
            ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
            ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
        ],
        des: 'dieu hoa',
        top: true,
        style: 2,
    },
    {
        id: 3,
        title: 'BIG C Tân Hiệp 3',
        images: [
            './assets/images/du-an-4.png',
            './assets/images/du-an-3.png',
            './assets/images/du-an-2.png',
            './assets/images/du-an-3.png'
        ],
        info: {
            client: 'BigC',
            time: '08-2020',
            address: 'Tân Hiệp - TPHCM',
            system: 'Mitsubitshi',
            wattage: '3kw-1.100kw',
        },
        detail: [

            ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
            ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
            ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
        ],
        des: 'cong nghiep lanh',
        top: true,
        style: 1,
    },
    {
        id: 4,
        title: 'BIG C Tân Hiệp 4',
        images: [
            './assets/images/du-an-4.png',
            './assets/images/du-an-3.png',
            './assets/images/du-an-2.png',
            './assets/images/du-an-4.png'
        ],
        info: {
            client: 'BigC',
            time: '08-2020',
            address: 'Tân Hiệp - TPHCM',
            system: 'Mitsubitshi',
            wattage: '3kw-1.100kw',
        },
        detail: [

            ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
            ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
            ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
        ],
        des: 'dieu hoa',
        top: false,
        style: 2,
    },
    {
        id: 5,
        title: 'BIG C Tân Hiệp 5',
        images: [
            './assets/images/du-an-4.png',
            './assets/images/du-an-3.png',
            './assets/images/du-an-2.png',
            './assets/images/du-an-5.png'
        ],
        info: {
            client: 'BigC',
            time: '08-2020',
            address: 'Tân Hiệp - TPHCM',
            system: 'Mitsubitshi',
            wattage: '3kw-1.100kw',
        },
        detail: [

            ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
            ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
            ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
        ],
        des: 'dieu hoa',
        top: false,
        style: 2,
    },
    {
        id: 6,
        title: 'BIG C Tân Hiệp 6',
        images: [
            './assets/images/du-an-4.png',
            './assets/images/du-an-3.png',
            './assets/images/du-an-2.png',
            './assets/images/du-an-6.png'
        ],
        info: {
            client: 'BigC',
            time: '08-2020',
            address: 'Tân Hiệp - TPHCM',
            system: 'Mitsubitshi',
            wattage: '3kw-1.100kw',
        },
        detail: [

            ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
            ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
            ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
        ],
        des: 'cong nghiep lanh',
        top: true,
        style: 1,
    },
    {
        id: 7,
        title: 'BIG C Tân Hiệp 7',
        images: [
            './assets/images/du-an-4.png',
            './assets/images/du-an-3.png',
            './assets/images/du-an-2.png',
            './assets/images/du-an-7.png'
        ],
        info: {
            client: 'BigC',
            time: '08-2020',
            address: 'Tân Hiệp - TPHCM',
            system: 'Mitsubitshi',
            wattage: '3kw-1.100kw',
        },
        detail: [

            ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
            ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
            ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
        ],
        des: 'cong nghiep lanh',
        top: false,
        style: 1,
    },
    {
        id: 8,
        title: 'BIG C Tân Hiệp 8',
        images: [
            './assets/images/du-an-4.png',
            './assets/images/du-an-3.png',
            './assets/images/du-an-2.png',
            './assets/images/du-an-8.png'
        ],
        info: {
            client: 'BigC',
            time: '08-2020',
            address: 'Tân Hiệp - TPHCM',
            system: 'Mitsubitshi',
            wattage: '3kw-1.100kw',
        },
        detail: [

            ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
            ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
            ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
        ],
        des: 'dieu hoa',
        top: false,
        style: 2,
    },
    {
        id: 9,
        title: 'BIG C Tân Hiệp 9',
        images: [
            './assets/images/du-an-4.png',
            './assets/images/du-an-3.png',
            './assets/images/du-an-2.png',
            './assets/images/du-an-9.png'
        ],
        info: {
            client: 'BigC',
            time: '08-2020',
            address: 'Tân Hiệp - TPHCM',
            system: 'Mitsubitshi',
            wattage: '3kw-1.100kw',
        },
        detail: [

            ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
            ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
            ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
        ],
        des: 'cong nghiep lanh',
        top: false,
        style: 1,
    },
]
handlerMenuMobile();
checkDetail();
clickTop();


function checkDetail() {

    const elDetail = $('#detailProject')
    const elIndex = $('#text-run')
    const elProjects = $('#pageProjects')
    
    if (elDetail) {
        let idLocal = localStorage.getItem('idProject');
        if (idLocal) {
            handlerRenderDetailProject(idLocal)
        }
        handlerRenderProjects(projects);
    }
    if (elIndex) {
        handlerRenderProjects(projects);

    }
    if (elProjects) {
        handlerRenderProjects(projects);
    }


}
// xử lý nút menu bp mobile
function handlerMenuMobile() {
    const elNav = $('#navbar')
    const elMenu = $('.nav-toggle')

    if (!elNav || !elMenu) {
        return
    }

    elMenu.onclick = () => {
        let a = elNav.classList.toggle('visible')

        if (a) {
            elMenu.innerHTML = `
             <span>
             <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </span>
                `
        } else {
            elMenu.innerHTML = `
               <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
          </span>
               `     }
    }
}

function handlerRenderProjects(projects) {
    let topProjects = [];
    let elProject = $('#projects .loop');
    let elTitle = $$('#projects .heading-sm');
    const activeFilter = $('#projects .project-active');

    if (!elProject) {
        return
    }

    if (elTitle.length > 0 && activeFilter) {
        choicePr()
        elTitle.forEach((et) => {
            et.addEventListener('click', () => {
                let a = $('#projects .project-active');
                a.classList.remove('project-active');
                et.classList.toggle('project-active');
                choicePr()
            })
        })
    } else {
        projects.forEach((pr) => {
            if (pr.top) {
                topProjects.push(pr);
                render(topProjects)
            }
        });
        handlerBtnDetailProject()
    }
    // nút chuyển các title , trong page dự án
    function choicePr() {
        let active = $('#projects .project-active');
        if (active.id == 1) {
            topProjects = projects.filter((pr) => pr.style == 1);
        } else if (active.id == 2) {
            topProjects = projects.filter((pr) => pr.style == 2);
        } else {
            topProjects = projects
        }
        render(topProjects)
        handlerBtnDetailProject()
    }
    // render list project
    function render(topProjects) {
        let htmls = topProjects.map((project) => {
            let img = project.images[3]
            return ` <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12  project">
                         <div class="project-wrap">
                         <img loading="lazy" src="${img}" alt="">
                         <div class="project-text" >
                            <div class="project-title">${project.title}</div>
                             <div class="project-des"> ${project.des} </div>
                              <a href="detail.html" id="${project.id}" class="project-btn">Chi tiết
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                   fill="currentColor" class="bi bi-arrow-right-short"
                                   viewBox="0 0 16 16">
                                   <path fill-rule="evenodd"
                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                 </svg></span>
                                 </a>
                         </div>
                         </div>
                  </div>`
        }).join('')
        elProject.innerHTML = htmls;
    }

}
// nút chi tiết trong card project
function handlerBtnDetailProject() {
    let listBtnDetail = $$('.project-btn');
    listBtnDetail.forEach((btn) => {
        btn.addEventListener('click', () => {
            localStorage.clear()
            localStorage.setItem('idProject', btn.id)

        })
    })
}

// render 1 project , với tham số là id
function handlerRenderDetailProject(id) {
    if (id) {
        let project = projects.find((pr) => pr.id == id)
        if (project) {

            $('#detailProject .title p').innerHTML = project.title;
            // __________________________________________
            $('#detailProject .img-group').innerHTML = project.images.map((img) => {
                return ` <img class="col-sm-6 pb-5"
                    src="${img}"
                    class="d-block w-100 " alt="...">`
            }).join('');
            // __________________________________________
            $('#detailProject .info').innerHTML = `
               <div class="heading-sm title-xl p-0 ">Thông tin dự án</div>
               <p>Khách hàng : <span>${project.info.client}</span> </p>
               <p>Thời gian : <span> ${project.info.time}</span> </p>
               <p>Địa điểm : <span>${project.info.address}</span> </p>
               <p>Hệ thống : <span>${project.info.system}</span> </p>
               <p>Công suất : <span> ${project.info.wattage}</span> </p>
               <div class="text-base"> BKTECH cung cấp các dịch vụ : Thiết kế , thi công , lắp đặt bảo trì
                    với chuyên môn , kỹ
                    thuật cao chuyên về kho lạnh .</div>
               `               // __________________________________________

            let content = '';
            $('#detailProject .detail-pj').innerHTML = project.detail.map((item) => {
                let content2 = ''
                content = item.map((dt1, index) => {
                    if (index === 0) {
                        content2 = ' <h1 class="heading-md ">' + dt1 + '</h1>'
                    } else if (Array.isArray(dt1)) {
                        content2 = dt1.map((d) => {
                            return `<li class="text-base p-0 pb-3 text-left "> ${d}  </li>`
                        }).join(' ');
                    } else {
                        content2 = ' <p class="text-base p-0 pb-3"> ' + dt1 + '</p>'
                    }
                    return `${content2} `
                }).join(' ');
                return `${content}`
            }).join(' ');
        }
    }
}

function clickTop() {
    const btnTop = document.querySelector('.btn-top');

    if (!btnTop) {
        return;
    }

    // Scroll lên đầu
    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hiện nút khi scroll xuống
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            btnTop.style.display = 'block';
        } else {
            btnTop.style.display = 'none';
        }
    });
}

