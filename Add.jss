@RestController
@RequestMapping("/api")
public class GymController {
    
    @GetMapping("/students")
    public List<Student> getAllStudents() { /* ... */ }
    
    @PostMapping("/students")
    public Student addStudent(@RequestBody Student student) { /* ... */ }
    
    @DeleteMapping("/students/{id}")
    public void removeStudent(@PathVariable Long id) { /* ... */ }
    
    @PutMapping("/payments/{studentId}")
    public void updatePaymentStatus(
        @PathVariable Long studentId,
        @RequestParam int month,
        @RequestParam String status) { /* ... */ }
}

@Entity
class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String[] paymentStatus = new String[12];
}
