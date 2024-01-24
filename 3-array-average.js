function getAverage(marks) {
  // Periksa apakah marksay tidak kosong
  if (marks.length === 0) {
    return "marksay is empty";
  }

  // Hitung jumlah elemen marksay

  const sum = marks.reduce((acc, num) => acc + num, 0);

  // Hitung rata-rata dengan membagi jumlah dengan jumlah elemen
  const average = sum / marks.length;

  // Bulatkan rata-rata ke bawah ke bilangan bulat terdekat
  const roundedAverage = Math.floor(average);

  return roundedAverage;
}

const grades = [1, 2, 3, 4, 5];
const averageGrade = getAverage(grades);
console.log(averageGrade);
