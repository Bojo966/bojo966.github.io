(() => {
    let addSkillBtnElement = $('#add-skill-btn');
    let skillsListElement = $('#skills-list');
    let skillInputElement = $('#skill-input');
    let dayPickerInputElement = $('#day-picker');
    let dayPickerLabelElement = $('#day-picker-label');
    let monthPickerInputElement = $('#month-picker');
    let monthPickerLabelElement = $('#month-picker-label');
    let addLectureSubtaskButtonElement = $('#add-lecture-subtask-name');
    let lectureSubtaskInputElement = $('#lecture-subtask-name');
    let lectureSubtasksListElement = $('#lecture-subtasks');


    addSkillBtnElement.click(addSkillToListOfSkills);
    dayPickerInputElement.mousemove(updateLabelForDayPicker);
    monthPickerInputElement.mousemove(updateLabelForMonthPicker);
    addLectureSubtaskButtonElement.click(addLectureSubtask)

    function addLectureSubtask() {
        let lectureSubtaskText = lectureSubtaskInputElement.val();
        lectureSubtasksListElement.append(
            $('<li class="mdl-list__item">').append(
                $('<span class="mdl-list__item-primary-content">')
                .append(
                    $('<i class="material-icons mdl-list__item-icon">')
                    .html('delete')
                    .click(removeSelectedSkillListItem))
                .append(lectureSubtaskText)
            )
        )
        lectureSubtaskInputElement.val('');
    }

    function updateLabelForMonthPicker() {
        monthPickerLabelElement.html(monthPickerInputElement.val());
    }

    function updateLabelForDayPicker() {
        dayPickerLabelElement.html(dayPickerInputElement.val());
    }

    function addSkillToListOfSkills() {
        let currentSkillAdded = skillInputElement.val();
        skillsListElement.append(
            $('<li class="mdl-list__item">').append(
                $('<span class="mdl-list__item-primary-content">')
                .append(
                    $('<i class="material-icons mdl-list__item-icon">')
                    .html('delete')
                    .click(removeSelectedSkillListItem)
                ).append(currentSkillAdded)
            )
        );
        skillInputElement.val('');
    }

    function removeSelectedSkillListItem(ev) {
        $(ev.target).parent().parent().remove();
    }
})()