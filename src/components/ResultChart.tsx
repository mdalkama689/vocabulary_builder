import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface ResultChartProps {
  correct: number;
  incorrect: number;
  categoryCounts: Record<string, { correct: number; incorrect: number }>;
  difficultyCounts: Record<string, { correct: number; incorrect: number }>;
}

const ResultChart: React.FC<ResultChartProps> = ({ 
  correct, 
  incorrect, 
  categoryCounts, 
  difficultyCounts 
}) => {
  const doughnutChartRef = useRef<HTMLCanvasElement>(null);
  const categoryChartRef = useRef<HTMLCanvasElement>(null);
  const difficultyChartRef = useRef<HTMLCanvasElement>(null);
  
  const doughnutChartInstance = useRef<Chart | null>(null);
  const categoryChartInstance = useRef<Chart | null>(null);
  const difficultyChartInstance = useRef<Chart | null>(null);
  
  // Set up the overall score chart
  useEffect(() => {
    if (doughnutChartRef.current) {
      // Destroy previous chart if it exists
      if (doughnutChartInstance.current) {
        doughnutChartInstance.current.destroy();
      }
      
      const ctx = doughnutChartRef.current.getContext('2d');
      if (ctx) {
        doughnutChartInstance.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
              data: [correct, incorrect],
              backgroundColor: [
                'rgba(139, 92, 246, 0.8)',  // Purple for correct
                'rgba(239, 68, 68, 0.8)',   // Red for incorrect
              ],
              borderColor: [
                'rgba(139, 92, 246, 1)',
                'rgba(239, 68, 68, 1)',
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: 'rgba(209, 213, 219, 1)'
                }
              },
              title: {
                display: true,
                text: 'Overall Score',
                color: 'rgba(209, 213, 219, 1)',
                font: {
                  size: 16,
                  weight: 'bold'
                }
              }
            },
            cutout: '70%'
          }
        });
      }
    }
    
    return () => {
      if (doughnutChartInstance.current) {
        doughnutChartInstance.current.destroy();
      }
    };
  }, [correct, incorrect]);
  
  // Set up the category chart
  useEffect(() => {
    if (categoryChartRef.current && Object.keys(categoryCounts).length > 0) {
      // Destroy previous chart if it exists
      if (categoryChartInstance.current) {
        categoryChartInstance.current.destroy();
      }
      
      const ctx = categoryChartRef.current.getContext('2d');
      if (ctx) {
        const categories = Object.keys(categoryCounts);
        const correctData = categories.map(cat => categoryCounts[cat].correct);
        const incorrectData = categories.map(cat => categoryCounts[cat].incorrect);
        
        categoryChartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)),
            datasets: [
              {
                label: 'Correct',
                data: correctData,
                backgroundColor: 'rgba(139, 92, 246, 0.7)',
                borderColor: 'rgba(139, 92, 246, 1)',
                borderWidth: 1
              },
              {
                label: 'Incorrect',
                data: incorrectData,
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
                borderColor: 'rgba(239, 68, 68, 1)',
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              x: {
                stacked: false,
                ticks: {
                  color: 'rgba(209, 213, 219, 1)'
                },
                grid: {
                  color: 'rgba(75, 85, 99, 0.3)'
                }
              },
              y: {
                stacked: false,
                beginAtZero: true,
                ticks: {
                  color: 'rgba(209, 213, 219, 1)'
                },
                grid: {
                  color: 'rgba(75, 85, 99, 0.3)'
                }
              }
            },
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: 'rgba(209, 213, 219, 1)'
                }
              },
              title: {
                display: true,
                text: 'Performance by Category',
                color: 'rgba(209, 213, 219, 1)',
                font: {
                  size: 16,
                  weight: 'bold'
                }
              }
            }
          }
        });
      }
    }
    
    return () => {
      if (categoryChartInstance.current) {
        categoryChartInstance.current.destroy();
      }
    };
  }, [categoryCounts]);
  
  // Set up the difficulty chart
  useEffect(() => {
    if (difficultyChartRef.current && Object.keys(difficultyCounts).length > 0) {
      // Destroy previous chart if it exists
      if (difficultyChartInstance.current) {
        difficultyChartInstance.current.destroy();
      }
      
      const ctx = difficultyChartRef.current.getContext('2d');
      if (ctx) {
        const difficulties = Object.keys(difficultyCounts);
        const correctData = difficulties.map(diff => difficultyCounts[diff].correct);
        const incorrectData = difficulties.map(diff => difficultyCounts[diff].incorrect);
        
        difficultyChartInstance.current = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: difficulties.map(diff => diff.charAt(0).toUpperCase() + diff.slice(1)),
            datasets: [
              {
                label: 'Correct',
                data: correctData,
                backgroundColor: 'rgba(139, 92, 246, 0.3)',
                borderColor: 'rgba(139, 92, 246, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(139, 92, 246, 1)',
                pointRadius: 4
              },
              {
                label: 'Incorrect',
                data: incorrectData,
                backgroundColor: 'rgba(239, 68, 68, 0.3)',
                borderColor: 'rgba(239, 68, 68, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(239, 68, 68, 1)',
                pointRadius: 4
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              r: {
                beginAtZero: true,
                angleLines: {
                  color: 'rgba(75, 85, 99, 0.3)'
                },
                grid: {
                  color: 'rgba(75, 85, 99, 0.3)'
                },
                pointLabels: {
                  color: 'rgba(209, 213, 219, 1)',
                  font: {
                    size: 12
                  }
                },
                ticks: {
                  backdropColor: 'transparent',
                  color: 'rgba(209, 213, 219, 0.7)'
                }
              }
            },
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: 'rgba(209, 213, 219, 1)'
                }
              },
              title: {
                display: true,
                text: 'Performance by Difficulty',
                color: 'rgba(209, 213, 219, 1)',
                font: {
                  size: 16,
                  weight: 'bold'
                }
              }
            }
          }
        });
      }
    }
    
    return () => {
      if (difficultyChartInstance.current) {
        difficultyChartInstance.current.destroy();
      }
    };
  }, [difficultyCounts]);
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="h-64">
            <canvas ref={doughnutChartRef}></canvas>
          </div>
        </div>
        
        <div className="card">
          <div className="h-64">
            <canvas ref={difficultyChartRef}></canvas>
          </div>
        </div>
        
        <div className="card md:col-span-2">
          <div className="h-64">
            <canvas ref={categoryChartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultChart;