```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This will cause an infinite loop
    setCount(count + 1);
  }, [count]); // Dependency array includes 'count', causing infinite re-renders

  return <div>Count: {count}</div>;
}
```