// Треугольник. Напишите цикл, выводит такой треугольник:
// #
// ##
// ###
// ####
// #####
// ######
// #######
let array= []
array.push([2,3,4])
function triangle(){
    let result = ""
    for (let i=1; i<=7; i++){
        result += "#".repeat(i) + "\n"
    }
    return result
}
console.log(triangle())
// пузырёк
// let arr = [5, 2, 14, 9, 8]
// for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++){
//             if (arr[j]>arr[j+1]){
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]] }}}
// document.write(arr)

// шелла
// let arr = [5, 2, 14, 9, 8]
// let n = arr.length
// for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
//     // Сортировка вставками
//     for (let i = gap; i < n; i++) {
//         let temp = arr[i]
//         let j
//         for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
//             arr[j] = arr[j - gap]
//         }
//         arr[j] = temp }}
// document.write(arr)

// выбором
// let arr = [5, 2, 14, 9, 8, 33, 0]
// let n = arr.length
// for (let i=0; i<n; i++){
//     let min_index= i
//     for (let j=i+1; j<n; j++){
//         if (arr[j]<arr[min_index]){
//             min_index = j }}
//     if (min_index !== i){
//         [arr[i], arr[min_index]]=[arr[min_index], arr[i]] }}
// document.write(arr)
