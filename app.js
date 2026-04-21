document.addEventListener('DOMContentLoaded', () => {
    // We only have Lab Data right now, Field Data is conceptual.
    const chartData = [
        { label: 'mAP@50', lab: 70.6, field: 65.2, color: 'var(--accent-cyan)' },
        { label: 'Precision', lab: 74.8, field: 76.1, color: 'var(--accent-green)' },
        { label: 'Recall', lab: 77.3, field: 72.4, color: 'var(--accent-purple)' },
        { label: 'F1', lab: 74.1, field: 74.2, color: 'var(--accent-orange)' },
    ];

    const chartContainer = document.getElementById('comparison-chart');
    
    // Set up basic styles for the actual comparison chart structure.
    chartContainer.style.display = 'flex';
    chartContainer.style.justifyContent = 'space-around';
    chartContainer.style.alignItems = 'flex-end';
    chartContainer.style.width = '100%';
    chartContainer.style.height = '100%';
    chartContainer.style.position = 'absolute';
    chartContainer.style.bottom = '0';

    // Render bars
    chartData.forEach(item => {
        const group = document.createElement('div');
        group.style.display = 'flex';
        group.style.flexDirection = 'column';
        group.style.alignItems = 'center';
        group.style.gap = '10px';
        group.style.height = '100%';
        group.style.justifyContent = 'flex-end';
        group.style.width = '50px';

        const barsContainer = document.createElement('div');
        barsContainer.style.display = 'flex';
        barsContainer.style.alignItems = 'flex-end';
        barsContainer.style.gap = '4px';
        barsContainer.style.height = '100%';

        // Lab Bar (Solid Color)
        const labBar = document.createElement('div');
        labBar.style.width = '20px';
        // Height scaled slightly to fit standard 100% max container height
        const labHeight = `${item.lab}%`;
        labBar.style.height = '0'; // For animation
        labBar.style.backgroundColor = item.color;
        labBar.style.borderRadius = '4px 4px 0 0';
        labBar.style.transition = 'height 1s cubic-bezier(0.16, 1, 0.3, 1)';
        labBar.title = `Lab: ${item.lab}%`;

        // Field Bar (Striped/Conceptual)
        const fieldBar = document.createElement('div');
        fieldBar.style.width = '20px';
        const fieldHeight = `${item.field}%`;
        fieldBar.style.height = '0'; // For animation
        fieldBar.style.background = `repeating-linear-gradient(45deg, transparent, transparent 4px, ${item.color} 4px, ${item.color} 8px)`;
        fieldBar.style.border = `1px solid ${item.color}`;
        fieldBar.style.borderRadius = '4px 4px 0 0';
        fieldBar.style.transition = 'height 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s';
        fieldBar.title = `Field Concept: ${item.field}%`;

        barsContainer.appendChild(labBar);
        barsContainer.appendChild(fieldBar);

        const label = document.createElement('span');
        label.innerText = item.label;
        label.style.color = 'var(--text-secondary)';
        label.style.fontSize = '0.75rem';
        label.style.fontWeight = '600';
        label.style.position = 'absolute';
        label.style.bottom = '-25px';

        group.appendChild(barsContainer);
        group.appendChild(label);
        
        chartContainer.appendChild(group);

        // Animate up
        setTimeout(() => {
            labBar.style.height = labHeight;
            fieldBar.style.height = fieldHeight;
        }, 300);
    });
});
