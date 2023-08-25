function icon() {
    Swal.fire({
        title: 'Bạn muốn gửi thông tin?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Có',
        denyButtonText: `Không`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Đã gửi!', '', 'hoàn thành')
        } else if (result.isDenied) {
          Swal.fire('Bạn muốn sửa đổi thông tin đúng không?', '', 'info')
        }
      })
}
function check(){
    Swal.fire({
        title: 'Bạn muốn thay đổi gì không?',
        text: "Hãy kiểm tra thật kỹ nhé!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Không thay đổi!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Đã hoàn thành!',
            'success'
          )
        }
      })
}

function checkSDT(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
}