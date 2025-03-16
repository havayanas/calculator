let inp = document.getElementById('btn_clk');

function disp(value) {
    btn_clk.value += value;
}

function allClear() {
    btn_clk.value = '';
}

function result() {
    try {
        let result = eval(btn_clk.value);
        btn_clk.value = parseFloat(result).toFixed(2);
    } catch (error) {
        btn_clk.value = 'Error';
    }
}