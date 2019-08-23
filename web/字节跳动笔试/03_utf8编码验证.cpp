class Solution {
public:
    bool validUtf8(vector<int>& data) {
        for (int i = 0; i < data.size(); ++i) {
            if (data[i] < 0b10000000) {
                continue;
            } else {
                int cnt = 0, val = data[i];
                for (int j = 7; j >= 1; --j) {
                    if (val >= pow(2, j)) ++cnt;
                    else break;
                    val -= pow(2, j);
                }
                if (cnt == 1) return false;
                for (int j = i + 1; j < i + cnt; ++j) {
                    if (data[j] > 0b10111111 || data[j] < 0b10000000) return false;
                }
                i += cnt - 1;
            }
        }
        return true;
    }
};