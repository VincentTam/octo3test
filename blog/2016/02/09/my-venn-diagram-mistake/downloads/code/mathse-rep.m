A = [
4,86698;
9,23074;
14,17793;
19,9897;
49,22201;
74,5852;
99,3187;
124,39216;
249,9960;
499,4471;
999,2496;
1999,1416;
2499,319;
2999,223;
4999,482;
9999,356;
14999,155;
19999,81;
24999,45;
400000,152];
loglog(A(:,1), A(:,2), ".-k");
for i = 1:numel(A(:,1))
  text(A(i,1), A(i,2), ['(' num2str(A(i,1)) ',' num2str(A(i,2)) ')'], ...
  "fontsize", 12);
end
title("User's Total Reputation Distribution on Math Stack Exchange", ...
"fontsize", 14);
