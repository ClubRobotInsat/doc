drawing_setup_file $PRO_DIRECTORY\text\iso.dtl
format_setup_file $PRO_DIRECTORY\text\iso.dtl
pro_unit_sys mmNs
template_designasm $PRO_DIRECTORY\templates\mmNs_asm_design_abs.asm
template_new_ecadasm $PRO_DIRECTORY\templates\mmNs_ecad_asm_abs.asm
template_drawing $PRO_DIRECTORY\templates\a3_drawing.drw
template_sheetmetalpart $PRO_DIRECTORY\templates\mmNs_part_sheetmetal_abs.prt
template_solidpart $PRO_DIRECTORY\templates\mmNs_part_solid_abs.prt
template_boardpart $PRO_DIRECTORY\templates\mmNs_ecad_board_abs.prt
todays_date_note_format %Mmm-%dd-%yy
tolerance_standard iso
weld_ui_standard iso
save_file_iterations no
search_path_file $CREO_COMMON_FILES\ifx\parts\prolibrary\search.pro



