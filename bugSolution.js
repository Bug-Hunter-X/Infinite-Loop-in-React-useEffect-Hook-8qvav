```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: only runs once on mount
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update every 1 second
    return () => clearInterval(intervalId); // Cleanup function
  }, []); // Empty dependency array ensures this runs only once on mount

  return <div>Count: {count}</div>;
}
```