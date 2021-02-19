ctx = canvas.getContext('2d');

function previewImage(f){

	var file = f.files;
 
	//사진 한번 불러들이고, 다시 화면 열고  취소하면 에러납니다
	// 아래 코드 추가 해주세요
	console.log(f.files.length);
	if(f.files.length ==0)
	   return;
	// 확장자 체크
	if(!/\.(jpg|jpeg|png)$/i.test(file[0].name)){
	   alert('jpg, png 파일만 선택해 주세요.\n\n현재 파일 : ' + file[0].name);
 
	   // 선택한 파일 초기화
	   f.outerHTML = f.outerHTML;
 
	   document.getElementById('canvas').innerHTML = '';
 
	}
	else {
 
	   // FileReader 객체 사용
	   var reader = new FileReader();
 
	   // 파일 읽기가 완료되었을때 실행
	   reader.onload = function(rst){
		  console.log(rst.target.result);
		  parent.data_picture = rst.target.result;
		  //document.getElementById('canvas').innerHTML = '<img class="preview_img "src="' + rst.target.result + '">';
		  base_image = new Image();
		  base_image.src = rst.target.result;
		  ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		//   canvas.width=document.getElementById('preview-box-js').offsetWidth;
		//   canvas.height=document.getElementById('preview-box-js').offsetHeight;
		
		  base_image.onload = () => {
			ctx.drawImage(base_image, 0, 0, canvas.width, canvas.height);
		 }
	   }
 
	   // 파일을 읽는다
	   reader.readAsDataURL(file[0]);
 
	}
 }

const button = document.querySelector('ul');
const input = document.getElementsByClassName('form-control');

button.addEventListener('click', event => {
  document.getElementById("myhash").value = event.target.innerHTML;
});