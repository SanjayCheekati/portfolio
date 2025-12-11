/**
 * Example Web Worker for Heavy Computations
 * 
 * Offloads CPU-intensive tasks from main thread to prevent UI blocking.
 * Use for data parsing, large computations, or ML inference.
 * 
 * Usage in main thread:
 * 
 * const worker = new Worker(
 *   new URL('./workers/parser.worker.js', import.meta.url),
 *   { type: 'module' }
 * );
 * 
 * worker.postMessage({ type: 'PARSE_DATA', data: largeDataset });
 * 
 * worker.onmessage = (event) => {
 *   console.log('Result:', event.data);
 * };
 */

// Worker scope
self.onmessage = function(event) {
  const { type, data } = event.data;
  
  try {
    switch (type) {
      case 'PARSE_DATA':
        const result = parseHeavyData(data);
        self.postMessage({ type: 'PARSE_COMPLETE', result });
        break;
        
      case 'COMPUTE_STATS':
        const stats = computeStatistics(data);
        self.postMessage({ type: 'STATS_COMPLETE', stats });
        break;
        
      case 'PROCESS_IMAGE':
        const processed = processImageData(data);
        self.postMessage({ type: 'IMAGE_COMPLETE', processed });
        break;
        
      default:
        throw new Error(`Unknown task type: ${type}`);
    }
  } catch (error) {
    self.postMessage({
      type: 'ERROR',
      error: error.message
    });
  }
};

/**
 * Example: Parse and transform large dataset
 */
function parseHeavyData(rawData) {
  // Simulate heavy parsing/transformation
  const startTime = performance.now();
  
  const parsed = rawData.map(item => ({
    ...item,
    processed: true,
    timestamp: Date.now(),
    computed: heavyComputation(item.value)
  }));
  
  const duration = performance.now() - startTime;
  
  return {
    data: parsed,
    stats: {
      count: parsed.length,
      duration: `${duration.toFixed(2)}ms`
    }
  };
}

/**
 * Example: Compute statistics on dataset
 */
function computeStatistics(data) {
  const values = data.map(d => d.value).filter(v => typeof v === 'number');
  
  const sum = values.reduce((acc, v) => acc + v, 0);
  const mean = sum / values.length;
  const sorted = [...values].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  const min = Math.min(...values);
  const max = Math.max(...values);
  
  // Standard deviation
  const variance = values.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / values.length;
  const stdDev = Math.sqrt(variance);
  
  return {
    count: values.length,
    sum,
    mean,
    median,
    min,
    max,
    stdDev
  };
}

/**
 * Example: Process image data (filters, transformations)
 */
function processImageData(imageData) {
  // Simulate image processing
  const { width, height, data } = imageData;
  const processed = new Uint8ClampedArray(data);
  
  // Example: Apply grayscale filter
  for (let i = 0; i < processed.length; i += 4) {
    const avg = (processed[i] + processed[i + 1] + processed[i + 2]) / 3;
    processed[i] = avg;     // R
    processed[i + 1] = avg; // G
    processed[i + 2] = avg; // B
    // processed[i + 3] is alpha, keep unchanged
  }
  
  return {
    width,
    height,
    data: processed
  };
}

/**
 * Simulated heavy computation
 */
function heavyComputation(value) {
  // Example: Fibonacci-like computation
  if (value <= 1) return value;
  
  let a = 0, b = 1;
  for (let i = 2; i <= Math.min(value, 30); i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

// Log that worker is ready
console.log('🧵 Web Worker: parser.worker.js initialized');
