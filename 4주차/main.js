const btn = document.getElementById('btn'); //todo 추가 버튼
const addValue = document.getElementById('addValue'); //todo input
const result = document.getElementById('result'); //li에 추가될 부분
const submitBtn = document.getElementById('submitBtn'); //최종 todo 저장할 버튼
const addtext = document.getElementById('addtext'); //제목 input

const year = document.getElementById("year");
const month = document.getElementById("month");
const date = document.getElementById("date");

const dayCheck = [];//todo 날짜를 담을 배열

//todo 추가 function
btn.addEventListener('click', function() {
    if (addValue.value.trim() === '') {
        alert('내용을 입력하세요!');
    } else {
        const checkbox = document.createElement('input');//checkbox 생성 
        checkbox.type = 'checkbox';

        const list = document.createElement('li'); //li type인 list 한 개 생성
        
        const del = document.createElement('button'); //삭제 버튼 생성

        list.textContent = addValue.value; //list에 todo input 추가

        list.appendChild(checkbox); // list 안에 check box 추가
        list.appendChild(del); //list 안에 del 버튼 추가
        del.innerText = "❌"; //버튼 안에 들어갈 글자

        result.appendChild(list); // li에 list 추가
        
        del.addEventListener('click', deleteList);
    
        //checkbox 클릭 시 글자 위 라인 생성
        checkbox.addEventListener('change', function(){
            if(this.checked){
                list.classList.add('completed')
            }else{
                list.classList.remove('completed');
            }
        })
    }

    list.addEventListener('click', function(){
        //todo 수정
    })
});

function deleteList(e){
    const removeOne = e.target.parentElement;
    removeOne.remove();
}

submitBtn.addEventListener('click', function(){
    if (addtext.value.trim() === '') {
        alert('내용을 입력하세요!');
    } else {
        const list = document.createElement('li');
        const day = document.createElement("option")
        const del = document.createElement('button');

        const string = year.value + "년"+ month.value +"월"+ date.value+"일";
        list.textContent = addtext.value + "  ///  "+ string;
        
        
        del.innerText = "❌";
        
        if(dayCheck.includes(string)==true){
            alert('이미 작성중인 todo가 있습니다.')
        }else{
            result2.appendChild(list);
            result2.appendChild(day);
            list.appendChild(del);
            
            dayCheck.push(string)

            del.addEventListener('click', deleteList2);
        }
        
    }
})

function deleteList2(e){
    const removeOne = e.target.parentElement;
    removeOne.remove();
    //array에서 날짜도 삭제
}