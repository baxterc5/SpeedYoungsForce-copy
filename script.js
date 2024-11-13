function calculateSpeed() {
    let modulus = parseFloat(document.getElementById('modulus').value);
    let density = parseFloat(document.getElementById('density').value);

    if (isNaN(modulus) || modulus <= 0) {
        document.getElementById('result-speed').innerText = "Please enter a valid Young's Modulus (greater than 0).";
        return;
    }
    if (isNaN(density) || density <= 0) {
        document.getElementById('result-speed').innerText = "Please enter a valid Density (greater than 0).";
        return;
    }

    let speed = Math.sqrt(modulus / density);
    document.getElementById('result-speed').innerText = `Speed of Sound: ${speed.toFixed(2)} m/s`;
}

function calculateYoungsModulus() {
    let force = parseFloat(document.getElementById('force').value);
    let length = parseFloat(document.getElementById('length').value);
    let deltaLength = parseFloat(document.getElementById('deltaLength').value);

    if (isNaN(force) || force <= 0) {
        document.getElementById('result-modulus').innerText = "Please enter a valid Force (greater than 0).";
        return;
    }
    if (isNaN(length) || length <= 0) {
        document.getElementById('result-modulus').innerText = "Please enter a valid Original Length (greater than 0).";
        return;
    }
    if (isNaN(deltaLength) || deltaLength <= 0) {
        document.getElementById('result-modulus').innerText = "Please enter a valid Change in Length (greater than 0).";
        return;
    }

    // Calculate Strain (ΔL / L)
    let strain = deltaLength / length;

    // Approximate Stress (F / L, assuming unknown area)
    let stress = force;

    // Young's Modulus (E) = Stress / Strain
    let modulus = stress / strain;
    document.getElementById('result-modulus').innerText = `Young's Modulus: ${modulus.toFixed(2)} Pa`;
}

function convertToNewtons() {
    let lbf = parseFloat(document.getElementById('force-lbf').value) || 0;
    let kgf = parseFloat(document.getElementById('force-kgf').value) || 0;

    let newtons = (lbf * 4.44822) + (kgf * 9.80665);
    document.getElementById('result-newtons').innerText = `Total Force in Newtons: ${newtons.toFixed(2)} N`;
}
