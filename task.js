$(function () {
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#courseName li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    var $orders = $('#orders');
    var $courseName = $('#courseName');
    var $courseId = $('#courseId');
    var $delete=$('#delete');
    var $id = $('#id');
    var $name = $('#name');
    var $description = $('#description');
    var $gradeId = $('#gradeId');
    var $semesterId = $('#semesterId');
    var $subjectId = $('#subjectId');
    var $unitId = $('#unitId');
    var $chapterId = $('#chapterId');
    var $order = $('#order');
    var $sectionID = $('#sectionId');
    var $school = $('#school');
    $.ajax({
        type: 'GET',
        url: 'http://t-api.newsak.net/api/AdminCourse',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json',
        },
        success: function (orders) {
            $.each(orders.data, function (i, order) {
                $courseName.append("<li>" + order.courseName +"</li>" );
                $delete.append('<li>'+'<button class="btn" id="remove"><i class="fa fa-close"></i></button>'+'</li>')


                $courseId.append("<li>" + order.courseId + "</li>" );
                

            });



        }

    });
    $('#add').on('click', function () {
        var info = {
            id: $id.val(),
            name: $name.val(),
            description: $description.val(),
            gradeId: $gradeId.val(),
            semesterId: $semesterId.val(),
            subjectId: $subjectId.val(),
            unitId: $unitId.val(),
            chapterId: $chapterId.val(),
            order: $order.val(),
            sectionID: $sectionID.val(),
            school: $school.val(),
        };
        $.ajax({
            type: 'POST',
            url: 'http://t-api.newsak.net/api/AdminCourse',
            data: info

        });
    });

    $orders.delegate( '#remove', 'click', function () {
        var $li = $(this).closest('li');
        $.ajax({
            type: 'DELETE',
            url: 'http://t-api.newsak.net/api/AdminCourse/Delete' + $(this).attr('data.CourseId'),
            success: function () {
                $(self);
                    $li.remove();
            }
        })
    })
});





