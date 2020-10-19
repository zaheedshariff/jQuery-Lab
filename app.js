var button = '<button class="btn btn-xs btn-danger remove">X</button>';

$(function add() {
    $('#btn-add').click(function(){
        var skill = $('input[name="skill"]').val();
        // console.log(skill);
        // const newValue = skill;
        // localStorage.setItem("skillType", newValue);
        var newRow = '<tr><td>' + skill + button + '</td></tr>';
        $('tbody').append(newRow);
        console.log('this works to add');
    });
    $('.remove').on('click', function(){
        // $(this).parent('tr').remove();
        console.log('this works');
    });
});