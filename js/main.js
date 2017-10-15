'use strict';

function draw_logic(){
    var row = rows;
    do{
        var row_y = canvas_properties['height'] - row * 80 - 50;

        var column = columns;
        do{
            var column_x =
              column * 200
              + (row % 2 === 0 ? 100 : 0);

            canvas_draw_path({
              'properties': {
                'fillStyle': color_left,
              },
              'vertices': [
                {
                  'type': 'moveTo',
                  'x': column_x,
                  'y': row_y,
                },
                {
                  'x': column_x + 100,
                  'y': row_y - 30,
                },
                {
                  'x': column_x + 100,
                  'y': row_y + 20,
                },
                {
                  'x': column_x,
                  'y': row_y + 50,
                },
              ],
            });

            column_x =
              column * 200
              - (row % 2 === 0 ? 100 : 0);

            canvas_draw_path({
              'properties': {
                'fillStyle': color_right,
              },
              'vertices': [
                {
                  'type': 'moveTo',
                  'x': column_x + 100,
                  'y': row_y - 30,
                },
                {
                  'x': column_x + 200,
                  'y': row_y,
                },
                {
                  'x': column_x + 200,
                  'y': row_y + 50,
                },
                {
                  'x': column_x + 100,
                  'y': row_y + 20,
                },
              ],
            });
        }while(column--);
    }while(row--);
}

function repo_init(){
    core_repo_init({
      'info': '<input id=randomize type=button value="Randomize Colors">',
      'title': 'ColorSteps.htm',
    });
    canvas_init();

    update_colors();

    document.getElementById('randomize').onclick = function(){
        update_colors();
        core_escape();
    };
}

function resize_logic(){
    columns = Math.floor(canvas_properties['width'] / 200);
    rows = Math.floor(canvas_properties['height'] / 80);
}
