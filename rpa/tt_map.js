const hrTeam = { id: 1, dname: '인사팀' };
const devTeam = { id: 2, dname: '개발팀' };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: 'Hong', dept: 1 };
const kim = { id: 2, name: 'Kim', dept: 2 };
const emps = [
	hong,
	kim,
	{ id: 3, name: 'Park', dept: 2 },
	{ id: 4, name: 'Choi', dept: 2 },
];

const deptMap = new Map(depts.map(d => [d.id, d]));
console.log(deptMap);
// console.log('preHong>>', hong, { ...hong, XXX: 123 });
const empMap = new Map(
	emps.map(e => {
		const dept = deptMap.get(e.dept);
		return [e.id, { ...e, dept }];
	})
);
console.log(empMap);
console.log('postHong>>', hong);

const result = [...empMap]
	.filter(([, emp]) => emp.dept.id === 2)
	.map(([, emp]) => emp.name);

console.log(result);
