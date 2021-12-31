function productCheck() {
	if(document.frm.name.value == ""){
		alert("상품명을 입력하세요");
		frm.name.focus();
		return false;
	}
	if(document.frm.price.value == ""){
		alert("가격을 입력하세요");
		frm.price.focus();
		return false;
	}
	if(isNaN(document.frm.price.value)){
		alert("숫자를 입력하세요.");
		frm.price.focus();
		return false;
	}
	return true;
	
}