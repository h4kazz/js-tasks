const height = document.getElementById("height");
const weight = document.getElementById("weight");

const caculateBmi = () => {
  const heigtValue = Number(height.value) / 100;
  const weightValue = Number(weight.value);
  const heading = document.getElementById("result");
  const bmiResult = document.getElementById("calculated-bmi");
  const bmiCategory = document.getElementById("category");

  const calculated = weightValue / heigtValue ** 2;

  heading.textContent = "Your BMI:";
  bmiResult.textContent = calculated.toFixed(2);

  if (calculated < 18.5) {
    bmiCategory.textContent = "Underweight";
  } else if (calculated >= 18.5 && calculated <= 24.9) {
    bmiCategory.textContent = "Healthy Weight";
  } else if (calculated >= 25.0 && calculated <= 29.9) {
    bmiCategory.textContent = "Overweight";
  } else {
    bmiCategory.textContent = "Obesity";
  }
};

const button = document.getElementById("bmi-btn");
button.addEventListener("click", caculateBmi)
